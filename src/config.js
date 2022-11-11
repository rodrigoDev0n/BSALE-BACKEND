import { config } from 'dotenv';

config();

export const HOST = process.env.DB_HOST || 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com';
export const USER = process.env.DB_USER || 'bsale_test';
export const PASSWORD = process.env.DB_PASSWORD || 'bsale_test';
export const DB = process.env.DB_DATABASE || 'bsale_test';
export const PORT = process.env.DB_PORT || 3306;
