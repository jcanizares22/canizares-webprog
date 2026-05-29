const express = require('express');
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getMe,
  loginUser,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

router.route('/').get(protect, getUsers).post(protect, createUser);
router.route('/:id').put(protect, updateUser).delete(protect, deleteUser);

module.exports = router;


