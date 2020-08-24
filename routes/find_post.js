//습득물 게시판의 게시물 제목 클릭 시 상세 게시글을 보여줌

var express = require("express");
var router = express.Router();
const FindPost = require("../models/findpost");
const Comments = require("../models/comment");

router.get("/:_id", async (req, res) => {
  try {
    var id = req.params._id;
    const foundpost = await FindPost.findOne({ _id: id });
    res.json(foundpost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/:_id'+"/comment", async (req,res) => { //댓글 저장
    try{
        let comments = new Comments({
            username: req.body.username,
            content: req.body.content,
            postid: req.body.postid
        });
        await comments.save();
        res.json({message: "저장완료"});
    } catch (err) {
        res.json({message: err});
    }    
});

router.get("/:_id"+"/comment", async (req, res) => {
    try {
      var id = req.params._id;
      const comments = await Comments.find({"postid": id });
      res.json(comments);
    } catch (err) {
      res.json({ message: err });
    }
  });

module.exports = router;
