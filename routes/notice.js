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
        googleId: req.body.googleId,
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
  
//게시글 삭제
router.delete("/post/:_id", async (req, res) =>{ 
    try{
       //게시글 삭제
        await Notice.findOneAndRemove({"_id":req.params._id}) 
        res.json({message:'deleted'});
    } catch (err) {
      res.json({ message: err });
    }
});
//게시글 수정
router.patch("/post/:_id" + "/content/:content", async (req, res) =>{ 
    await Notice.updateOne({_id: req.params._id },{$set:{content : req.params.content}})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        next(err);
    });
});
//게시글 검색
router.get("/search/:searchval", async (req, res) => {
  try{
    let options = [
      { title: new RegExp(req.params.searchval) },
      { content: new RegExp(req.params.searchval) },
    ]
    const posts = await Notice.find({ $or: options })
    res.json(posts);
  } catch(err){
    res.json({message: err});
  }
});

module.exports = router;
