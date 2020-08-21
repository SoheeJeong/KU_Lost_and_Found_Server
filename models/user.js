var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
    username: {
        type: String,
		default: "username"} ,
	userid: {
		type: String,
		default: "userid"} ,
	password: {
		type: String,
		default: "password" }
}),

User = mongoose.model('User', userSchema);

module.exports = User;