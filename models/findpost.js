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
        },
    putplace: { //보관장소
        type: String, 
        },
    replynum: { //댓글수
        type: Number,
        default: 0 },
    content: { //내용
        type: String },
    username: { //작성자
        type: String,
        default: "nonamed"} ,
    date: { //날짜
        type: Date,
        default: Date.now }
}),

FindPost = mongoose.model('FindPost', FindSchema);
module.exports = FindPost;