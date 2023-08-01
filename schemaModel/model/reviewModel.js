import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    image : {
        type : String,
        //required : [true, "Image is required"]
    },
    description : {
        type : String,
        required : [true, "Description is required"]
    },
    author : {
        type : String,
        required : [ true, "Author is required"]
    },
    country :{
        type : String,
        required : [true,"Country is required"]
    }
},{
    timestamps : true
})

export default reviewSchema