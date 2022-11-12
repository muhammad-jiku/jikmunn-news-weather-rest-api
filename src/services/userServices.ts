// external imports
import { DocumentDefinition } from "mongoose";

// internal imports
import { UserDocument } from "../schemas/userSchema";
import UserModel from "../models/UserModel";

// defining create user
export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    const user = await UserModel.create(input);

    return user;
  } catch (e: any) {
    throw new Error(e);
  }
}
