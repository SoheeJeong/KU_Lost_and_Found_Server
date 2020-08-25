const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema( {
	accessToken: { //토큰
		type: String,},
    username: { //사용자 이름
        type: String,} ,
	email: { //구글이메일(아이디)
		type: String,} ,
	googleId: { //숫자형(아이디)
		type: String,}
}),

User = mongoose.model('User', userSchema);

module.exports = User;