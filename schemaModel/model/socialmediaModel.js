import mongoose from "mongoose";

const socialmediaSchema = new mongoose.Schema({
    platform: {
        type: String,
        required: true
    },
    link : {
        type : String,
        required : true
    },
},{
    timestamps : true
})

export default socialmediaSchema