import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true,"Title is required"]
    },
    TripInfo: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "TripInfo"
    },
    TripBooking : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "TripBooking"
    }
},{
    timestamps : true
})

export default categorySchema