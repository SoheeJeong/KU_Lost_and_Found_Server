//분실물 관련 schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

LostSchema = new Schema( {
    title: { //제목
        type: String,
        required: true },
    name: { //분실물명
        type: String,
        required: true },
    place: { //분실장소
        type: String,
        required: true },
    replynum: { //댓글수
        type: Number,
        default: 0 },
    content: { //내용
        type: String, 
        required: true},
    username: { //작성자
        type: String,
        default: "nonamed"} ,
    googleId: { //작성자 아이디
        type: String,
        required: true} ,
    date: { //날짜
        type: Date,
        default: Date.now }
}),

LostPost = mongoose.model('LostPost', LostSchema);
module.exports = LostPost;