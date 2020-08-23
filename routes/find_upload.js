var express = require("express");
var router = express.Router();
const FindPost = require("../models/findpost");

router.post("/", async (req, res) => {
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

router.post('/', async (req,res) => {
    try{
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
        res.json({message: "작성 완료!"});
    } catch (err) {
            res.json({message: err});
        }    
});

module.exports = router;
