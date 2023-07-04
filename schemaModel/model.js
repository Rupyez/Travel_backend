import { model } from "mongoose";


import aboutSchema from "./model/aboutModel.js";
import contactSchema from "./model/contactModel.js";
import { activitiesSchema } from "./model/activitiesModel.js";


export const About = model("About",aboutSchema)
export const Contact = model("Contact",contactSchema)
export const Activities = model("Activities",activitiesSchema)