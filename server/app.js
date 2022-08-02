const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./configs/db.config');
const cors = require("cors");
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter());
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

module.exports = app;
