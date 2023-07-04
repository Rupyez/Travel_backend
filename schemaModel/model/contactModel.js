import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
     contact : {
        type : Number,
    //     require : true,
     }
})

export default contactSchema