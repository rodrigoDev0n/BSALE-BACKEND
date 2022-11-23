import { config } from 'dotenv';

config();

export const HOST = process.env.DB_HOST;
export const USER = process.env.DB_USER;
export const PASSWORD = process.env.DB_PASSWORD;
export const DB = process.env.DB_DATABASE ;
export const PORT = process.env.DB_PORT;
