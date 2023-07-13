 import mongoose from "mongoose";

 const activitiesSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true,"Title of activities is required"]
    },
    Category :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    }
},{
    timestamps : true
})

export default activitiesSchema  
