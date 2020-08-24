//습득물 게시판
var express = require("express");
var router = express.Router();
const FindPost = require("../models/findpost");
const Comments = require("../models/comment");

//게시글 작성
router.post("/upload", async (req, res) => {
  try {
    let find_upload = new FindPost({
      title: req.body.title,
      name: req.body.name,
      getplace: req.body.getplace,
      putplace: req.body.putplace,
      content: req.body.content,
      replynum: req.body.replynum,
      username: req.body.username,
    });
    await find_upload.save();
    res.json({ message: "작성 완료!" });
  } catch (err) {
    res.json({ message: err });
  }
});

//게시글 전체 열람
router.get("/board", async (req, res) => {
    try {
      const boardfound = await FindPost.find();
      //시간순정렬 추가하기
      res.json(boardfound)
    } catch (err) {
      res.json({ message: err });
    }
  });

//게시글 상세 열람
router.get("/post/:_id", async (req, res) => {
  try {
    var id = req.params._id;
    const foundpost = await FindPost.findOne({ _id: id });
    res.json(foundpost);
  } catch (err) {
    res.json({ message: err });
  }
});

//게시글 삭제 (미완) //작성자, 관리자만 삭제 가능하게 하기
router.delete("/post/:_id", async (req, res) =>{ 
    try{
        await FindPost.findOneAndRemove({"_id":req.params._id}) //게시글 삭제
        await Comments.remove({"postid":req.params._id},{"postkind":"find"})//관련 댓글 모두 삭제
        res.json({message:'deleted'});
    } catch (err) {
      res.json({ message: err });
    }
});

//댓글 저장
router.post('/post/:_id'+"/comment", async (req,res) => {
    try{
        let comments = new Comments({
            username: req.body.username,
            content: req.body.content,
            postid: req.body.postid,
            postkind: req.body.postkind,
        });
        await comments.save();
        res.json({message: "저장완료"});
    } catch (err) {
        res.json({message: err});
    }    
});

//댓글 열람
router.get("/post/:_id"+"/comment", async (req, res) => {
    try {
      var id = req.params._id;
      const comments = await Comments.find({"postid": id });
      res.json(comments);
    } catch (err) {
      res.json({ message: err });
    }
});

//댓글 삭제
router.delete("/post/:_id" + "/comment/:_commentid", async (req, res) =>{ 
    try{
        await Comments.findOneAndRemove({"_id":req.params._commentid})
        res.json({message:'deleted'});
    } catch (err) {
      res.json({ message: err });
    }
});

//댓글 수정
router.patch("/post/:_id" + "/comment/:_commentid"+"/content/:content", async (req, res) =>{ 
    Comments.updateOne({_id: req.params._commentid },{$set:{content : req.params.content}})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        next(err);
    });
});

module.exports = router;
