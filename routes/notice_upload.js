var express = require("express");
var router = express.Router();
const Notice = require("../models/notice");

router.post("/", async (req, res) => {
  try {
    let notice_upload = new Notice({
      title: req.body.title,
      content: req.body.content,
    });
    await notice_upload.save();
    res.json({ message: "작성 완료!" });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
