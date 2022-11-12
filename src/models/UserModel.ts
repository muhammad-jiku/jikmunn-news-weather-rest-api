// extetnal imports
import mongoose from "mongoose";

// internal imports
import userSchema, { UserDocument } from "../schemas/userSchema";

const UserModel = mongoose.model<UserDocument>("People", userSchema);

export default UserModel;
