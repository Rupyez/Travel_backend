import mongoose from "mongoose";

const searchSchema = new mongoose.Schema({
    destination : {
        type : String,
        required : [true,"Destination is required"]
    },
    activities : {
        type : String,
        required : [true,"Activities is required"]
    },
    trip_duration : {
        type : Number,
        required : [true,"Trip Duration is required"]
    }
},{
    timestamps : true
})

export default searchSchema;