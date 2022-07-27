import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
});

export default pool