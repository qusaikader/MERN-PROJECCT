const mongoose = require('mongoose')
const { Schema } = mongoose;

const PostSchema = new Schema({
    displayName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean,
        required:true
    },
    // Image type
    avatar:{
        data: Buffer,
        contentType: String,
        required: true
    },
    // Add modifications here
    image:{
        data: Buffer,
        contentType: String
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
    });

module.exports = mongoose.model("post", PostSchema);