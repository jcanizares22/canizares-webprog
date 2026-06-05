/**
 * Usage:
 *   node scripts/setAdminByEmail.js
 *
 * Requires env:
 *   - MONGO_URI
 *
 * Edit the TARGET_EMAIL below as needed.
 */

require('dotenv').config();
const mongoose = require('mongoose');

const TARGET_EMAIL = 'djpaolo05@gmail.com';

const User = require('../models/User');

async function main() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('Missing env var MONGO_URI');
    process.exit(1);
  }

  await mongoose.connect(uri);

  const user = await User.findOne({ email: TARGET_EMAIL.toLowerCase() });
  if (!user) {
    console.error(`User not found for email: ${TARGET_EMAIL}`);
    process.exit(1);
  }

  user.role = 'admin';
  await user.save();

  console.log(`OK: Set role=admin for ${TARGET_EMAIL}. User id: ${user._id}`);

  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

