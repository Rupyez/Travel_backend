 import mongoose from "mongoose";

 const tripcategorySchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true,"Title of trip_category is required"]
    },
    image : {
        type : String,
        required : [true,"Image of trip_category is required"]
    },
    priority : {
        type : Number,
        default : 0 
    }
},{
    timestamps : true
})

export default tripcategorySchema  
