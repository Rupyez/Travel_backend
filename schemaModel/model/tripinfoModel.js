import mongoose from "mongoose";

const tripinfoSchema = new mongoose.Schema({
    heading : {
        type : String,
        required : [true,"Heading is required"]
    },
    description : {
        type : String,
        required : [true,"Description is required"]
    }
},{
    timestamps : true 
})

export default tripinfoSchema;