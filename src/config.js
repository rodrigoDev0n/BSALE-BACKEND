import { config } from 'dotenv';
/* 
HOST=mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com
USER=bsale_test
PASSWORD=bsale_test
DB=bsale_test
*/

config();

export const HOST = process.env.HOST;
export const USER = process.env.USER;
export const PASSWORD = process.env.PASSWORD;
export const DB = process.env.DB;