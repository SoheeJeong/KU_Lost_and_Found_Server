const mongoose = require('mongoose');
const { Int32 } = require('bson');
const Schema = mongoose.Schema;

LostSchema = new Schema( {
    title: {
        type: String,
        required: true },
    name: {
        type: String,
        required: true },
    place: {
        type: String,
        required: true },
    replynum: {
        type: Number,
        default: 0 },
    content: {
        type: String,
        default: "nocontent" },
    username: {
        type: String,
        default: "nonamed"} ,
    date: {
        type: Date,
        default: Date.now }
}),

LostUpload = mongoose.model('LostUpload', LostSchema);
module.exports = LostUpload;