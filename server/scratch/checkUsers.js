import mongoose from 'mongoose';
import User from '../src/models/User.js';
import env from '../src/config/env.js';

async function check() {
  await mongoose.connect(env.MONGODB_URI);
  const users = await User.find({});
  console.log('Users found in DB:', users.map(u => ({ id: u._id, email: `"${u.email}"`, role: u.role, status: u.status })));
  await mongoose.disconnect();
}

check().catch(console.error);
