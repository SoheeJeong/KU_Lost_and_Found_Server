//분실물 게시판의 게시물 제목 클릭 시 상세 게시글을 보여줌
var express = require('express');
var router = express.Router();
const LostPost = require('../models/lostpost');
const FindPost = require("../models/findpost");

//mypage
router.get("/:boardkind"+"/:googleId", async (req, res) => {
    try {
      var boardkind = req.params.boardkind;
      //분실물 게시글
      if(boardkind === "lost"){
        const mylost = await LostPost.find({googleId: req.params.googleId});
        res.json(mylost);
      }
      //습득물 게시글
      else if(boardkind === "find"){
        const myfind = await FindPost.find({googleId: req.params.googleId});
        res.json(myfind);
      }
      else{
        res.json({message: "wrong board type"});
      }
    } catch (err) {
      res.json({ message: err });
    }
  });
  
  module.exports = router;