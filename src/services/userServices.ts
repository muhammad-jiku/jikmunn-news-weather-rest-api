// external imports
import { Omit } from "lodash";
import { DocumentDefinition } from "mongoose";

// internal imports
import UserModel, { UserDocument } from "../models/UserModel";

// defining create user
export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    const user = await UserModel.create(input);

    return user;
  } catch (e: any) {
    throw new Error(e);
  }
}
