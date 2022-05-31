const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:", (error) => {
  if (error) {
    console.log("error connecting to the db");
    return;
  }
  console.log("connected to sqlite db");
});

db.run("CREATE TABLE users(first_name, last_name,age)");


module.exports = db;
