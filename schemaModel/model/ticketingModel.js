import mongoose from "mongoose";

const domesticSchema = new mongoose.Schema({
    title:{
        type : String,
        required : [true,"Title must be provided"]
    }
})

const internationalSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true,"Title is required"]
    }
})

const ticketingSchema = new mongoose.Schema({
    domestic:{
        type : domesticSchema,
        required : [true,"Domestic is required"]
    },
    international:{
        type : internationalSchema,
        required : [true,"International is required"]
    }
})

export { ticketingSchema }