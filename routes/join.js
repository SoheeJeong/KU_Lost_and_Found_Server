var express = require('express');
var router = express.Router();
const Post = require('../models/post');

router.post('/', async (req,res) => {
    // console.log(req.body); //이거 콘솔에 출력되려면 bodyparser 필요
    try{
        let post = new Post({
            title: req.body.title,
            description: req.body.description
        });
        await post.save();
        res.json({message: "로그인 완료"});
    } catch (err) {
        res.json({message: err});
    }    
});

// // //localhost5000/posts
// router.get('/',async (req,res) => { 
//     try{
//         const posts = await Post.find(); //mongoose의 method인 find()
//         // res.json(posts); //db의 post collection 내의 모든 data 출력
//     }catch(err){
//         res.json({message:err});
//     }
//     //res.send('on posts');
// });


// router.get('/:postId',async (req,res) => { 
//     try{
//         const foundpost = await Post.findById(req.params.postId);
//         res.json(foundpost);
//     }catch (err){
//         res.json({message:err});
//     }
// });



// //Update a post
// router.patch('/:postId', async (req,res) => {
//     try{
//         const updatedPost = await Post.updateOne(
//             {_id: req.params.postId},
//             {$set: {title: req.body.title}} );
//         res.json(updatedPost);
//     }catch (err){
//         res.json({message:err});
//     }
// });

module.exports = router;