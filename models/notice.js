//공지사항 관련 schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

(NoticeSchema = new Schema({
  title: {
    //제목
    type: String,
    required: true,
  },
  content: {
    //내용
    type: String,
    required: true,
  },
  date: {
    //날짜
    type: Date,
    default: Date.now,
  },
})),
  (Notice = mongoose.model("Notice", NoticeSchema));
module.exports = Notice;
