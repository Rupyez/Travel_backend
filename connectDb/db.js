import mongoose from "mongoose";
import { MONGO_URL } from "../config/config.js";

export const connectDb = async() => {
    mongoose.set("strictQuery",false)

    const option = {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }
    
    try{ 
        await mongoose.connect(MONGO_URL,option)
        console.log("MongoDb connected Successfully")
    }catch(error){
        console.log(error.message)
    }
}