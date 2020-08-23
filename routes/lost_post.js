//분실물 게시판의 게시물 제목 클릭 시 상세 게시글을 보여줌

var express = require('express');
var router = express.Router();
const LostPost = require('../models/lostpost');
const { ObjectID } = require('bson');

router.get("/", async (req, res) => {
    try {
    //밑에 id값은 예시
      var id = ObjectID("5f3e9f259de32774d0bf3d38");
      const lostpost = await LostPost.findOne({_id: id});
      res.json(lostpost)
    } catch (err) {
      res.json({ message: err });
    }
  });

module.exports = router;