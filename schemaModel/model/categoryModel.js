import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true,"Title is required"]
    }
},{
    timestamps : true
})

export default categorySchema