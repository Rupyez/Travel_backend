import mongoose from "mongoose";

const tripinfoSchema = new mongoose.Schema({
    heading : {
        type : String,
        required : [true,"Heading is required"]
    },
    description : {
        type : String,
        required : [true,"Description is required"]
    },
    image : {
        type : String,
        required : true
    },
    itinerary : {
        type : String,
        require : [true]
    },
    duration :{
        type : String,
        required : true
    },
    trip_grade : {
        type : String,
        required : true
    },
    seasons : {
        type : String,
        required : [true]
    },
    price : {
        type : String,
        required : [true]
    },
    cost_includes : {
        type : String ,
        required : [true]
    },
    cost_excludes : {
        type : String,
        required : [true]
    },
    overview : {
        type : String,
        required : [true]
    }
},{
    timestamps : true 
})

export default tripinfoSchema;