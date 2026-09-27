import mongoose from 'mongoose';
import argon2 from 'argon2';
import User from '../src/models/User.js';
import env from '../src/config/env.js';

async function resetAdmin() {
  await mongoose.connect(env.MONGODB_URI);
  console.log('Connected to:', env.MONGODB_URI);

  // Remove existing admin if any
  await User.deleteMany({ role: 'admin' });

  const email = (process.env.ADMIN_EMAIL || 'admin@gmail.com').toLowerCase().trim();
  const password = process.env.ADMIN_PASSWORD || 'Password@123';
  const name = process.env.ADMIN_NAME || 'Admin X';
  const phone = process.env.ADMIN_PHONE || '1234567890';

  const passwordHash = await argon2.hash(password, { type: argon2.argon2id });

  const admin = await User.create({
    name,
    email,
    phone,
    passwordHash,
    role: 'admin',
    status: 'ACTIVE',
    mustChangePassword: false,
  });

  console.log('🎉 Successfully created admin user:');
  console.log('Email:', admin.email);
  console.log('Role:', admin.role);
  console.log('Status:', admin.status);

  // Test Argon2 verification
  const isMatch = await argon2.verify(admin.passwordHash, password);
  console.log('Password Match Test:', isMatch);

  await mongoose.disconnect();
}

resetAdmin().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
