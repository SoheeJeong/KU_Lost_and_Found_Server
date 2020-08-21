const mongoose = require('mongoose');
const Schema = mongoose.Schema;

CommentSchema = new Schema( {
    username: { //작성자
        type: String,
        required: true
    },
    content: { //내용
        type: String,
        required: true
    },
    date: { //날짜
        type: Date,
        default: Date.now
    }
}),

CommentPost = mongoose.model('CommentPost', CommentSchema);
module.exports = CommentPost;