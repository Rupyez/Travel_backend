import mongoose from "mongoose";

const tripbookingSchema = new mongoose.Schema({
    trip_name:{
        type : String,
        required : [true,"Trip Name is required"]
    },
    full_name:{
        type : String,
        required : [true,"Fullname is required"]
    },
    email:{
        type : String,
        required : [true,"Email is required"],
        //unique : true
    },
    country:{
        type : String,
        required : [true,"Country is required"]
    },
    contact_number:{
        type : Number,
        required : [true,"Contact number is required"]
    },
    number_of_person:{
        type : Number,
        required : [true]
    },
    arrival_date:{
        type:Date,
        required : true
    },
    departure_date:{
        type: Date,
        required: true
    },
    message:{
        type:String,
        // required : true
    },
    seen : {
        type : Boolean,
        default : false,
        description : "For admin use only, false is set to default value"
    }
},{
    timestamps : true 
})

export default tripbookingSchema;