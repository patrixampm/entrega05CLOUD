import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    email: { type: Schema.Types.String, required: true },
    password: { type: Schema.Types.String, required: true },
    salt: { type: Schema.Types.String, required: true },
    role: { type: Schema.Types.String, required: true },
});
export const userContext = mongoose.model('User', userSchema, 'users');
