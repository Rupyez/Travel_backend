import { model } from "mongoose";


import aboutSchema from "./model/aboutModel.js";
import contactSchema from "./model/contactModel.js";
import { activitiesSchema } from "./model/activitiesModel.js";
import { ticketingSchema } from "./model/ticketingModel.js";
import userSchema from "./model/userModel.js";


export const About = model("About",aboutSchema)
export const Contact = model("Contact",contactSchema)
export const Activities = model("Activities",activitiesSchema)
export const Ticketing = model("Ticketing",ticketingSchema)
export const User = model("User",userSchema)