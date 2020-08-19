const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyparser = require('body-parser');
app.use(bodyparser.json());

//import routes
const postsRoute = require('./routes/posts');
app.use('/posts',postsRoute); //localhost5000/posts로 갈 때 마다 postsRoute 실행

app.get('/',(req,res) => {
    res.send('on home');
});

// app.get('/posts',(req,res) => {
//     res.send('on posts');
// }); => router에서 route해줌

//mongodb 연결
mongoose.connect('mongodb://localhost/user');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

app.listen(5000);