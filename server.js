const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
app.use(bodyParser.json());
const cors = require("cors");

const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "findthanku",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//localhost4000/lost
const lost = require("./routes/lost");
app.use("/lost", lost);

//localhost4000/find
const find = require("./routes/find");
app.use("/find", find);

//localhost4000/notice
const notice = require("./routes/notice");
app.use("/notice", notice);

//user
const user = require("./routes/user");
app.use("/user",user);

// //mypage
// const mypage = require("./routes/mypage");
// app.use("/mypage",mypage);

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

//mongodb connect (db name = board)
mongoose.connect("mongodb://localhost/board");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {});

// listen on port 4000
app.listen(4000, () => {
  console.log("Express app listening on port 4000");
});
