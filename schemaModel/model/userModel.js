import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true,"UserName should be provided"],
        unique : true
    },
    email : {
        type : String,
        required : [true , "Email should be provided"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "Password should be provided"],
        minLength : [8,"Password must be longer than 8 character"]
    },
    role : {
        type : String,
        required : [true,"Role should be provided"],
        enum : ["SuperAdmin","Admin","User"],
        default : "User"
    },
    created_at : {
        type : Date,
        default : Date.now
    }
},{
    timestamps : true
})

export default userSchema