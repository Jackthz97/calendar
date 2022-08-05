const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./configs/db.config");
const cors = require("cors");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", indexRouter);
app.use("/users", usersRouter());
app.put("/user-data", (req, res) => {
  let data = {
    email: req.body.data.email,
    password: req.body.data.password,
  };

  db.query(`SELECT * FROM users WHERE email = $1 AND password = $2`, [
    data.email,
    data.password,
  ])
    .then((response) => res.send(response.rows[0]))
    .catch((e) => console.error(e.stack));
});
app.put("/reminder-input", (req, res) => {
  let data = {
    id: req.body.user,
    weekday: req.body.weekday,
    date: req.body.date,
    year: req.body.year,
    reminderNote: req.body.reminderNote,
    month: req.body.month,
  };
  console.log(
    `/reminder-input: id: ${data.id} \n weekday: ${data.weekday} \n date: ${data.date} \n year: ${data.year} \n reminderNote: ${data.reminderNote} \n month: ${data.month}`
  );
  db.query(
    `INSERT INTO reminders (user_id, weekday, date, year, reminderNote, month)
  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [data.id, data.weekday, data.date, data.year, data.reminderNote, data.month]
  )
    .then((res) => res.send(res))
    .catch((error) => res.send(error));
});
app.put("/reminder-get", (req, res) => {
  let data = req.body.user_id;

  db.query(`SELECT * FROM reminders WHERE user_id = $1`, [data])
    .then((response) => res.send(response.rows))
    .catch((e) => console.error(e.stack));
});

module.exports = app;
