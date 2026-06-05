/**
 * Optional helper to promote an existing user to admin by email.
 * Not required for normal operation.
 */
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

async function main() {
  const email = process.env.TARGET_EMAIL || 'djpaolo05@gmail.com';
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error('Missing MONGO_URI');

  await mongoose.connect(uri);
  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) throw new Error(`User not found: ${email}`);
  user.role = 'admin';
  await user.save();
  console.log(`Set admin role for ${email}. id=${user._id}`);
  await mongoose.disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

