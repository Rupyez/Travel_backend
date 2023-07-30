import {config }from "dotenv";

config()
export const port = process.env.PORT
export const base_url = process.env.BASE_URL || "localhost:5000";
export const MONGO_URL = process.env.DB_URL || "mongodb+srv://sabin123:sabin123@cluster0.6xnhi3r.mongodb.net/Travel_backend?retryWrites=true&w=majority";
// export const MONGO_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/travel_backend";

export const apiVersion = process.env.API_VERSION


export const staticFolder = "./public"

export const expiryIn = process.env.EXPIRY_IN
export const secretKey = process.env.SECRET_KEY

// email configurations
export const fromEmail = process.env.FROM_EMAIL;
export const fromPassword = process.env.FROM_PASSWORD;
export const emailHost = process.env.EMAIL_HOST;
export const emailPort = process.env.EMAIL_PORT;
export const emailSecure = process.env.EMAIL_SECURE;
const envirnoment = process.env.ENVIRONMENT ||  'test'

let baseUrl = " ";
if (envirnoment === "development") {
  baseUrl = `http://localhost:${port}`;
} else if (envirnoment === "test") {
   //baseUrl = `https://travel-backend-cyan.vercel.app/`;
   baseUrl = `https://travel-backend-sf6l.onrender.com`
} else if (envirnoment === "production") {
  baseUrl = ``;
}