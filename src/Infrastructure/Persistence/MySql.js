const mysql = import("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "rjph_metrics"
});

export class Connection {
  connection() {
    return pool.getConnection();
  }
}
// const mySQL = require("mysql");

// const pool = mySQL.createPool({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "rjph_metrics"
// });
//
// const getConnection = function(callback) {
//   pool.getConnection(function(err, connection) {
//     if (err) {
//       return callback(err);
//     }
//     callback(null, connection);
//   });
// };
//
// module.exports = getConnection;
