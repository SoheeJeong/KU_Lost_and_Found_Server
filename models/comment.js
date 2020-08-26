const mongoose = require('mongoose');
const { ObjectID } = require('bson');
const Schema = mongoose.Schema;

CommentSchema = new Schema( {
    postid: { //어떤 게시글의 댓글인지 게시글의 _id정보
        type: String,
        required: true
    },
    postkind: { //분실 or 습득 (게시글종류)
        type: String,
        required: true
    },
    username: { //작성자
        type: String,
        default: "sohee(temp)"
    },
    googleId: { //작성자 아이디(숫자형)
        type: String,
        required: true
    } ,
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