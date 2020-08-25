//공지사항 게시판
var express = require("express");
var router = express.Router();
const Notice = require("../models/notice");

//게시글 작성
router.post("/upload", async (req, res) => {
    try {
      let notice_upload = new Notice({
        title: req.body.title,
        content: req.body.content,
      });
      await notice_upload.save();
      res.json({ message: "작성 완료!" });
    } catch (err) {
      res.json({ message: err });
    }
});

//전체 게시글 열람
router.get("/", async (req, res) => {
  try {
    const boardnotice = await Notice.find();
    //시간순정렬 추가하기
    res.json(boardnotice);
  } catch (err) {
    res.json({ message: err });
  }
});

//상세 게시글 열람
router.get("/post/:_id", async (req, res) => {
    try {
      var id = req.params._id;
      const noticepost = await Notice.findOne({ _id: id });
      res.json(noticepost);
    } catch (err) {
      res.json({ message: err });
    }
  });
  
//게시글 삭제 (미완) //관리자만 삭제 가능하게 하기
router.delete("/post/:_id", async (req, res) =>{ 
    try{
        await Notice.findOneAndRemove({"_id":req.params._id}) //게시글 삭제
        res.json({message:'deleted'});
    } catch (err) {
      res.json({ message: err });
    }
});

module.exports = router;
