const express = require("express"),
  cors = require("cors");

const app = express(),
  db = require("./db");

app.use(cors());
app.use(express.json());

app.post("/api/v1/users", (req, res) => {
  const body = req.body;
  const sql = "INSERT INTO users(first_name, last_name,age) VALUES(?,?,?)";
  const newUser = db.run(sql, [body.first_name, body.last_name, body.age]);
  res.status(200).send(newUser);
});

app.get("/api/v1/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.all(sql, [], (error, rows) => {
    if (error) {
      console.error(error);
      return res.status(500);
    }
    res.status(200).send(rows);
  });
});

const PORT = process.env.PORT || 2000;
app.listen(PORT);
