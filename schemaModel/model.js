import { model } from "mongoose";


import aboutSchema from "./model/aboutModel.js";
import contactSchema from "./model/contactModel.js";


export const About = model("About",aboutSchema)
export const Contact = model("Contact",contactSchema)