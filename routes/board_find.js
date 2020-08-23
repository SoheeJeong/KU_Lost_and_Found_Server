//습득물 게시판
var express = require('express');
var router = express.Router();
const FindPost = require('../models/findpost');

router.get("/", async (req, res) => {
    try {
      const boardfound = await FindPost.find();
      //시간순정렬 추가하기
      res.json(boardfound)
    } catch (err) {
      res.json({ message: err });
    }
  });

module.exports = router;