import dotenv from 'dotenv';
dotenv.config();

export const Env = {
  BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
  USERNAME: process.env.USERNAME || 'testuser',
  PASSWORD: process.env.PASSWORD || 'pass123',
};
