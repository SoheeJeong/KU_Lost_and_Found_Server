//공지사항 게시판
var express = require("express");
var router = express.Router();
const Notice = require("../models/notice");

router.get("/", async (req, res) => {
  try {
    const boardnotice = await Notice.find();
    //시간순정렬 추가하기
    res.json(boardnotice);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
