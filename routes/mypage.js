//분실물 게시판의 게시물 제목 클릭 시 상세 게시글을 보여줌
var express = require('express');
var router = express.Router();
const LostPost = require('../models/lostpost');
const FindPost = require("../models/findpost");

//mypage
router.get("/mypage/:temp", async (req, res) => {
    try {
      const mylost = await LostPost.find();
      const myfind = await FindPost.find()
      //시간순정렬 추가하기
      res.json(boardnotice);
    } catch (err) {
      res.json({ message: err });
    }
  });
  
  module.exports = router;