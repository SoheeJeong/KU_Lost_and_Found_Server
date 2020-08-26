//분실물 게시판의 게시물 제목 클릭 시 상세 게시글을 보여줌
var express = require('express');
var router = express.Router();
const LostPost = require('../models/lostpost');
const Comments = require("../models/comment");

//게시글 작성
router.post('/upload', async (req,res) => {
    try{
        let lost_upload = new LostPost({
            title: req.body.title,
            name: req.body.name,
            place: req.body.place,
            content: req.body.content,
            replynum: req.body.replynum,
            username: req.body.username,
            googleId: req.body.googleId,
        });
        await lost_upload.save();
        res.json({message: "작성 완료!"});
    } catch (err) {
        res.json({message: err});
    }    
});
//전체 게시글 보기
router.get("/board", async (req, res) => {
    try {
      const boardlost = await LostPost.find();
      //시간순정렬 추가하기
      res.json(boardlost)
    } catch (err) {
      res.json({ message: err });
    }
});
//상세 게시글 보기
router.get("/post/:_id", async (req, res) => {
    try {
        var id = req.params._id;
        const lostpost = await LostPost.findOne({"_id":id});
        res.json(lostpost);
    } catch (err) {
      res.json({ message: err });
    }
  });
//게시글 삭제 (미완) //작성자, 관리자만 삭제 가능하게 하기
router.delete("/post/:_id", async (req, res) =>{ 
    try{
        await LostPost.findOneAndRemove({"_id":req.params._id}) //게시글 삭제
        await Comments.remove({"postid":req.params._id},{"postkind":"lost"})//관련 댓글 모두 삭제
        res.json({message:'deleted'});
    } catch (err) {
      res.json({ message: err });
    }
});
//게시글 수정
router.patch("/post/:_id" + "/content/:content", async (req, res) =>{ 
    await LostPost.updateOne({_id: req.params._id },{$set:{content : req.params.content}})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        next(err);
    });
});
//댓글 저장
router.post('/post/:_id'+"/comment", async (req,res) => {
    try{
        let comments = new Comments({
            username: req.body.username,
            content: req.body.content,
            postid: req.body.postid,
            postkind: req.body.postkind,
            googleId: req.body.googleId,
        });
        await comments.save();
        res.json({message: "저장완료"});
    } catch (err) {
        res.json({message: err});
    }    
});
//댓글수 조정(+1,-1)
router.patch("/post/:_id" + "/replynum/:_num", async (req, res) =>{ 
    posts = await LostPost.findOne({_id:req.params._id});
    const newreplynum =  Number(posts.replynum) + Number(req.params._num);
    if(newreplynum<0){ newreplynum=0; }
    await LostPost.updateOne({_id: req.params._id },{$set:{replynum : newreplynum}})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        next(err);
    });
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
    await Comments.updateOne({_id: req.params._commentid },{$set:{content : req.params.content}})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        next(err);
    });
});

module.exports = router;