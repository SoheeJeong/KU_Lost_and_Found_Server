//습득물 관련 schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

FindSchema = new Schema( {
    title: { //제목
        type: String,
        required: true },
    name: { //습득물명
        type: String,
        required: true },
    getplace: { //습득장소
        type: String, 
        required: true},
    putplace: { //보관장소
        type: String, 
        required: true},
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
        default: Date.now}
}),

FindPost = mongoose.model('FindPost', FindSchema);
module.exports = FindPost;