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


//locathost3000/join
const join = require('./routes/join'); //여기서 index.js 쓰임
app.use('/join', join);


// app.get('/',(req,res) => {
//     res.send('on home');
// });

// // error handler
// // define as the last app.use callback
// app.use(function (err, req, res, next) {
//   res.status(err.status || 500);
//   res.send(err.message);
// });

//mongodb connect
mongoose.connect('mongodb://localhost/join');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

// listen on port 4000
app.listen(4000, () => {
  console.log('Express app listening on port 4000');
});


// app.listen(8080, function() {
//     console.log("listen umm..umm..um...");
//   });