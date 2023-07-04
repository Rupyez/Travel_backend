import mongoose from "mongoose";

const full_itinerarySchema = new mongoose.Schema({
    title:{
        type: String,
        required : [true,"Title is required"]
    },
    description:{
        type : String,
        // required : true,
    }
})

const tripbookingSchema = new mongoose.Schema({
    trip_name:{
        type : String,
        required : [true,"Trip Name is required"]
    },
    full_name:{
        type : String,
        // required : true,
    },
    email:{
        type : String,
        // required : true,
    },
    country:{
        type : String,
        //required : true,
    },
    contact_number:{
        type : Number,
        // required : true,
    },
    number_of_person:{
        type : Number,
        // required : true,
    },
    arrival_date:{
        type:Date,
        // required : true
    },
    depature_date:{
        type: Date,
        // required: true
    },
    message:{
        type:String,
        // required : true
    }
})

const activitiesSchema = new mongoose.Schema({
    overview : {
        type : String,
        required : [true,"OverView is required"]
    },
    full_itinerary : {
        type : full_itinerarySchema,
        required : [true,"Itinerary is required"]
    },
    trip_booking :{
        type : tripbookingSchema,
        required : [true,["Trip Booking is required"]]
    }
},{
    timestamps : true
})

export { activitiesSchema } 

