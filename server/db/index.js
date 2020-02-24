const mysql = require('mysql');

const dbpool = mysql.createPool({
  connectionLimit: 10,
  user: 'noemusr',
  password: '***',
  database: 'noem',
  host: 'localhost',
  port: '3306'
});

let noemdb = {};

noemdb.allUsers = () => {
  return new Promise((resolve, reject) => {
    dbpool.query('SELECT * FROM users', (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

noemdb.insertUser = (user) => {
  return new Promise((resolve, reject) => {
    dbpool.query(
      'INSERT INTO users(name) VALUES (?)',
      [user.name],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      });
  });
};

module.exports = noemdb;