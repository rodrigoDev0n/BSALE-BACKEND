import { createPool } from "mysql2/promise";
import { 
    HOST, 
    USER, 
    PASSWORD, 
    DB, 
    PORT 
} from "./config.js";

export let pool = createPool ({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DB,
    port: PORT,
    connectTimeout: 10000*6000,
    connectionLimit: 10000*6000,
});
