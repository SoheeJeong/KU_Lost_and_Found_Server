const mongoose = require('mongoose');
const Schema = mongoose.Schema;

PostSchema = new Schema( {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}),

Post = mongoose.model('Post', PostSchema);
module.exports = Post;