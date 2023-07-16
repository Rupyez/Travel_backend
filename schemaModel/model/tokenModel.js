import { Schema } from "mongoose";

const tokenSchema = Schema({
    token: {
        type: String,
        required: [true, "Please enter your token"],
        trim: true,
    },
});

export default tokenSchema