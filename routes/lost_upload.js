var express = require('express');
var router = express.Router();
const LostUpload = require('../models/lost_upload');

router.post('/', async (req,res) => {
    try{
        let lost_upload = new LostUpload({
            title: req.body.title,
            name: req.body.name,
            place: req.body.place,
            content: req.body.content,
            replynum: req.body.replynum,
            username: req.body.username
        });
        await lost_upload.save();
        res.json({message: "작성 완료!"});
    } catch (err) {
        res.json({message: err});
    }    
});

module.exports = router;