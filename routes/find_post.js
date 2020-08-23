//습득물 게시판의 게시물 제목 클릭 시 상세 게시글을 보여줌

var express = require('express');
var router = express.Router();
const FindPost = require('../models/findpost');
const { ObjectID } = require('bson');

router.get("/", async (req, res) => {
    try {
        var id = req.params._id;
        //const foundpost = await FindPost.findById({"_id": ObjectID(id)});
        const foundpost = await FindPost.findById({"_id": ObjectID("5f3ff15f7f356e453cf912d7")}); 
        res.json(foundpost);
    } catch (err) {
      res.json({ message: err });
    }
  });

module.exports = router;