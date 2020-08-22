var express = require('express');
var router = express.Router();
const LostPost = require('../models/lostpost');

router.get("/", async (req, res) => {
    try {
      const boardlost = await LostPost.find();
      //res.json(boardlost[5].title);
      //res.json({boardlost});
      res.json(boardlost[2])
    } catch (err) {
      res.json({ message: err });
    }
  });

module.exports = router;