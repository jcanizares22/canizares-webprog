import { useEffect, useMemo, useState, useCallback } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { fetchArticles, createArticle, updateArticle, deleteArticle } from '../../services/articleService';

const statuses = ['draft', 'published'];
const blankForm = {
  title: '',
  slug: '',
  content: '',
  status: 'draft',
};

const DashArticleListPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [formErrors, setFormErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const loadArticles = async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await fetchArticles();
      const normalized = data.articles.map((article) => ({
        ...article,
        id: article._id,
      }));
      setArticles(normalized);
    } catch (loadError) {
      setError(loadError.response?.data?.message || loadError.message || 'Unable to load articles.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const resetForm = () => {
    setForm(blankForm);
    setFormErrors({});
  };

  const openModal = (article) => {
    setModal({ open: true, id: article?.id || null });
    setForm(article ? { ...article } : { ...blankForm });
    setFormErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    resetForm();
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const nextErrors = {};
    if (!form.title.trim()) nextErrors.title = 'Title is required.';
    if (!form.slug.trim()) nextErrors.slug = 'Slug is required.';
    if (!form.content.trim()) nextErrors.content = 'Content is required.';
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length) {
      setFormErrors(nextErrors);
      return;
    }

    try {
      const payload = {
        title: form.title,
        slug: form.slug,
        content: form.content,
        status: form.status,
      };

      if (modal.id) {
        const { data } = await updateArticle(modal.id, payload);
        setArticles((prev) => prev.map((article) => (article.id === modal.id ? { ...data, id: data._id } : article)));
      } else {
        const { data } = await createArticle(payload);
        setArticles((prev) => [{ ...data, id: data._id }, ...prev]);
      }
      closeModal();
    } catch (submitError) {
      setFormErrors({ general: submitError.response?.data?.message || submitError.message });
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteArticle(id);
      setArticles((prev) => prev.filter((article) => article.id !== id));
    } catch (deleteError) {
      setError(deleteError.response?.data?.message || deleteError.message || 'Unable to delete article.');
    }
  };

  const filteredArticles = useMemo(() => {
    const lowercase = searchTerm.toLowerCase();
    return articles.filter((article) =>
      article.title.toLowerCase().includes(lowercase) ||
      article.slug.toLowerCase().includes(lowercase)
    );
  }, [articles, searchTerm]);

  const clearSearch = useCallback(() => setSearchTerm(''), []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'slug', headerName: 'Slug', width: 120 },
    { field: 'title', headerName: 'Title', flex: 1, minWidth: 180 },
    {
      field: 'paragraphs',
      headerName: 'Paragraphs',
      width: 120,
      renderCell: ({ row }) => {
        const count = row.content ? row.content.split('\n').filter(p => p.trim()).length : 0;
        return count;
      },
    },
    {
      field: 'preview',
      headerName: 'Preview',
      flex: 1.2,
      minWidth: 250,
      renderCell: ({ row }) => {
        const preview = row.content ? row.content.substring(0, 60) : '';
        return `${preview}${preview.length === 60 ? '...' : ''}`;
      },
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: ({ row }) => (
        <Chip label={row.status} color={row.status === 'published' ? 'success' : 'default'} size="small" />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 180,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button size="small" variant="outlined" onClick={() => openModal(row)}>
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => handleDelete(row.id)}
          >
            Disable
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%', minWidth: 0 }}>
      <Box
        sx={{
          mb: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="h4">Articles</Typography>
        <Button variant="contained" onClick={() => openModal()}>
          Add Article
        </Button>
      </Box>

      {error ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      ) : null}

      <Paper sx={{ p: { xs: 1.5, sm: 2 }, minWidth: 0, overflow: 'hidden' }}>
        <Box sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6" gutterBottom>Search & Manage</Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center">
            <TextField
              size="small"
              fullWidth
              label="Search Articles"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="outlined" size="small" onClick={clearSearch}>
              Clear
            </Button>
            <Chip label={`Showing ${filteredArticles.length} of ${articles.length}`} size="small" />
          </Stack>
        </Box>

        {articles.length ? (
          <Box sx={{ height: { xs: 400, sm: 520 }, width: '100%', minWidth: 0 }}>
            <DataGrid
              rows={filteredArticles}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10]}
              initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
              sx={{
                minWidth: 0,
                '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader': {
                  outline: 'none',
                },
              }}
            />
          </Box>
        ) : (
          <Alert severity="info">No articles found. Add an article to get started.</Alert>
        )}
      </Paper>

      <Dialog
        open={modal.open}
        onClose={closeModal}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
      >
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>{modal.id ? 'Edit Article' : 'Add Article'}</DialogTitle>
          <DialogContent dividers sx={{ pa: { xs: 2, sm: 3 } }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  label="Title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  error={Boolean(formErrors.title)}
                  helperText={formErrors.title}
                  fullWidth
                />
                <TextField
                  label="Slug"
                  name="slug"
                  value={form.slug}
                  onChange={handleChange}
                  error={Boolean(formErrors.slug)}
                  helperText={formErrors.slug}
                  fullWidth
                />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  label="Status"
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  select
                  fullWidth
                >
                  {statuses.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>
              <TextField
                label="Content"
                name="content"
                value={form.content}
                onChange={handleChange}
                error={Boolean(formErrors.content)}
                helperText={formErrors.content}
                multiline
                rows={6}
                fullWidth
              />
              {formErrors.general && (
                <Alert severity="error">{formErrors.general}</Alert>
              )}
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, py: 2 }}>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="contained">
              {modal.id ? 'Update Article' : 'Save Article'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default DashArticleListPage;
