//분실물 게시판의 게시물 제목 클릭 시 상세 게시글을 보여줌

var express = require('express');
var router = express.Router();
const LostPost = require('../models/lostpost');

//게시글 보기(완)
router.get("/:_id", async (req, res) => {
    try {
        var id = req.params._id;
        const lostpost = await LostPost.findOne({"_id":id});
        res.json(lostpost);
    } catch (err) {
      res.json({ message: err });
    }
  });

//게시글 삭제 (미완)
//아직 프론트에 삭제버튼 & 삭제기능 추가 안함 //작성자, 관리자만 삭제 가능하게 하기
router.delete("/:_id", async (req, res) =>{ 
    try{
        item.remove({"_id" :req.params.id});
    } catch (err) {
      res.json({ message: err });
    }
});

module.exports = router;