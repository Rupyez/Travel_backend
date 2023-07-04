import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
     contact_number : {
        type : Number,
        required : [true,"Contact number must not be blank"]
     },
     address :{
          type : String,
          required : [true,"Address must be provided"]
     },
     email:{
          type : String,
          required : [true,"Email must be provided"]
     },
     inquiry:{
          type : String,
          required : [true,]
     }
},{
     timestamps : true
})

export default contactSchema