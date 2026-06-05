const User = require('../models/User');
const bcrypt = require('bcryptjs'); // For password hashing
const jwt = require('jsonwebtoken'); // For generating tokens

const getUsers = async (req, res) => {
  try {
    const {
      search = '',
      role = '',
      gender = '',
      status = '',
      // pagination (optional)
      page = '0',
      pageSize = '5',
    } = req.query;

    const pageNumber = Math.max(parseInt(page, 10) || 0, 0);
    const limit = Math.max(parseInt(pageSize, 10) || 5, 1);
    const skip = pageNumber * limit;

    const filter = {};

    const searchTrimmed = String(search).trim();
    if (searchTrimmed) {
      const rx = new RegExp(searchTrimmed, 'i');
      filter.$or = [
        { firstName: rx },
        { lastName: rx },
        { email: rx },
        { username: rx },
      ];
    }

    if (role) filter.role = role;
    if (gender) filter.gender = gender;

    if (status) {
      if (status === 'active') filter.isActive = true;
      if (status === 'inactive') filter.isActive = false;
    }

    const total = await User.countDocuments(filter);
    const users = await User.find(filter, '-password')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({ users, total });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




const createUser = async (req, res) => {
  try {
    if (!req.body.password) {
      return res.status(400).json({ message: 'Password is required' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const { password, role, firstName, lastName, gender, address, ...rest } = req.body;

    const user = await User.create({
      ...rest,
      role: role || 'editor',
      firstName: firstName || rest.username || 'New',
      lastName: lastName || 'User',
      gender: gender || 'other',
      address: address || 'No address provided',
      password: hashedPassword,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id, '-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: 'Your account is inactive. Please contact support.' });
    }




    if (user.role === 'viewer') {
      return res.status(403).json({ message: 'Viewer accounts are not allowed to log in.' });
    }

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role }, // Include role in the token
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      message: 'Login successful',
      token,
      role: user.role,
      firstName: user.firstName,
      email: user.email,
      id: user._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser, getMe, loginUser };
