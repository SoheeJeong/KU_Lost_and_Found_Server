// //사용자 관리
// var express = require("express");
// var router = express.Router();
// const User = require("../models/user");

// //로그인->사용자 정보 저장
// router.post("/login", async (req, res) => {
//     try {
//       let new_user = new User({
//         accessToken: req.body.accessToken,
//         username: req.body.username,
//         email: req.body.email,
//         googleId: req.body.googleId,
//       });
//       await new_user.save();
//       res.json({ message: "로그인 완료!" })
//     } catch (err) {
//       res.json({ message: err });
//     }
// });

// //로그아웃-> 사용자 정보 삭제
// router.delete("/logout/:gid", async (req, res) => {
//   try {
//     await User.remove({googleId: req.params.gid});
//     //시간순정렬 추가하기
//     res.json({message:"deleted"});
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// module.exports = router;