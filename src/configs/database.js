const mysql = require("mysql2");
require("dotenv").config();


// design pattern: connection pool => research after class
// dùng pool giảm thiểu thời gian tạo kết nối khi muốn thực hiện query
const connection = mysql.createPool({
  host: process.env.HOST_NAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// const connection = mysql.createConnection({
//       host: process.env.HOST_NAME,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// })

module.exports = connection;
