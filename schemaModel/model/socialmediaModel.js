import mongoose from "mongoose";

const socialmediaSchema = new mongoose.Schema({
    username : {
        type : String ,
        required : [true,"Username is required"]
    },
    platform: {
        type: String,
        required: true
    },
    image : {
        type : String ,
        required : true
    },
    link : {
        type : String,
        required : true
    },
    User : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
},{
    timestamps : true
})

export default socialmediaSchema