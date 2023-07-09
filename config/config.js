import {config }from "dotenv";

config()
export const port = process.env.PORT
export const base_url = process.env.BASE_URL || "localhost:5000";
export const MONGO_URL = process.env.DB_URL || "mongodb+srv://sabin123:sabin123@cluster0.6xnhi3r.mongodb.net/Travel_backend?retryWrites=true&w=majority";
// export const MONGO_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/travel_backend";

export const apiVersion = process.env.API_VERSION


export const staticFolder = "./public"