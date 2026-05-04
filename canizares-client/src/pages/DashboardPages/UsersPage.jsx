import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Stack, TextField, Button } from '@mui/material';
import { usersData } from '../../data/dashboardData.js';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
  { field: 'fullName', headerName: 'Full name', width: 160, valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}` },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'role', headerName: 'Role', width: 120 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <Stack direction="row" spacing={1}>
        <Button size="small" variant="outlined" color="primary">Edit</Button>
        <Button size="small" variant="outlined" color="error">Delete</Button>
      </Stack>
    )
  },
];

const rows = usersData.map(user => ({ ...user, email: `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@example.com`, role: 'User' }));

function UsersPage() {
  const [searchText, setSearchText] = useState('');

  const filteredRows = rows.filter(row => 
    row.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
    row.lastName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Users Management
      </Typography>
      {/* Search Bar */}
      <Stack direction="row" spacing={2} sx={{ mb: 2, alignItems: 'center' }}>
        <TextField
          label="Search Users"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          size="small"
          sx={{ flexGrow: 1 }}
        />
        <Button variant="contained">Add New User</Button>
      </Stack>
      <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}

export default UsersPage;


