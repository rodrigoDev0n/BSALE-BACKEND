import { createPool } from "mysql2/promise";
import { HOST, USER, PASSWORD, DB } from "./config.js";

export const pool = createPool ({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DB,
    connectTimeout: 1000*600,
});
