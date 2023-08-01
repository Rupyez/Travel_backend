import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
    name : {
        type : String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        //unique: true
    },
    phone_number : {
        type : String,
        required : [true,"Phone number is required"]
    },
    message : {
        type: String,
        required: [true, "Message is required"]
    },
    seen : {
        type : Boolean,
        default : false,
        description : "For admin use,set to false by default"
    }
},{
    timestamps : true
})

export default inquirySchema