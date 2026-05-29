const express = require('express');
const {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/articleController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getArticles).post(protect, createArticle);
router.route('/:id').get(protect, getArticleById).put(protect, updateArticle).delete(protect, deleteArticle);

module.exports = router;
