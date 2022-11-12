// extetnal imports
import mongoose from "mongoose";

// internal imports
import userSchema from "../schemas/userSchema";

const UserModel = mongoose.model("People", userSchema);

export default UserModel;
