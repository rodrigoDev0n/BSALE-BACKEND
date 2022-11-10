import { createPool } from "mysql2/promise";
import { HOST, USER, PASSWORD, DB } from "./config.js";

export const pool = createPool ({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test',
    connectTimeout: 1000*600,
});
