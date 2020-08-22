const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(bodyParser.json());
const cors = require("cors");


const corsOptions = {
  origin: true,
  credentials: true
};

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "findthanku",
    cookie: {
      httpOnly: true,
      secure: false
    }
  })
);

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//localhost4000/lost_upload
const lost_upload = require('./routes/lost_upload'); 
app.use('/lost_upload', lost_upload);

//localhost4000/find_upload
const find_upload = require('./routes/find_upload'); 
app.use('/find_upload', find_upload);

//localhost4000/board_lost
const board_lost = require('./routes/board_lost'); 
app.use('/board_lost', board_lost);

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

//mongodb connect (db name = board)
mongoose.connect('mongodb://localhost/board');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

// listen on port 4000
app.listen(4000, () => {
  console.log('Express app listening on port 4000');
});