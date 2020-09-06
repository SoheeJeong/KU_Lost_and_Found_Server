const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
app.use(bodyParser.json());
const cors = require("cors");
const PORT = process.env.PORT || 4000;

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

//분실물 관련
const lost = require("./routes/lost");
app.use("/lost", lost);

//습득물 관련
const find = require("./routes/find");
app.use("/find", find);

//공지사항 관련
const notice = require("./routes/notice");
app.use("/notice", notice);

//mypage 관련
const mypage = require("./routes/mypage");
app.use("/mypage", mypage);

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

//mongodb connect (db name = board)
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/board");
mongoose.connect(
  "mongodb://eunsoo:eunsoo0802@ds061691.mlab.com:61691/heroku_86l029dh"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {});

// listen on port
app.listen(PORT, () => {
  console.log("Express app listening on port");
});
