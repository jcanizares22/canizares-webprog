/**
 * Usage:
 *   node scripts/checkRoleByEmail.js
 *
 * Env:
 *   - MONGO_URI
 */
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

const TARGET_EMAIL = process.env.TARGET_EMAIL || 'djpaolo05@gmail.com';

async function main() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('Missing MONGO_URI');
    process.exit(1);
  }

  await mongoose.connect(uri);

  const user = await User.findOne({ email: TARGET_EMAIL.toLowerCase() });
  if (!user) {
    console.log(`User not found for ${TARGET_EMAIL}`);
    process.exit(0);
  }

  console.log({
    id: user._id.toString(),
    email: user.email,
    role: user.role,
    isActive: user.isActive,
  });

  await mongoose.disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

