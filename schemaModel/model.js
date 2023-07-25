import { model } from "mongoose";


import aboutSchema from "./model/aboutModel.js";
import contactSchema from "./model/contactModel.js";
import tripcategorySchema from "./model/tripcategoryModel.js";
import { ticketingSchema } from "./model/ticketingModel.js";
import userSchema from "./model/userModel.js";
import tripbookingSchema from "./model/tripbookingModel.js";
import tripinfoSchema from "./model/tripinfoModel.js";
import searchSchema from "./model/searchModel.js";
import reviewSchema from "./model/reviewModel.js";
import tokenSchema from "./model/tokenModel.js"
import socialmediaSchema from "./model/socialmediaModel.js";


export const About = model("About",aboutSchema)
export const Contact = model("Contact",contactSchema)
export const TripCategory = model("TripCategory",tripcategorySchema)
export const Ticketing = model("Ticketing",ticketingSchema)
export const User = model("User",userSchema)
export const TripBooking = model("TripBooking",tripbookingSchema)
export const TripInfo = model("TripInfo",tripinfoSchema)
export const Search= model("Search",searchSchema)
export const Review = model("Review",reviewSchema)
export const TokenData = model("TokenData",tokenSchema)
export const SocialMedia = model("SocialMedia",socialmediaSchema)