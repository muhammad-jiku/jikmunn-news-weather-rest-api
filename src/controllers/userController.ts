import { Request, Response } from "express";
import { omit } from "lodash";

// internal imports
import { createUser } from "../services/userServices";
import log from "../utilities/logger";
import { CreateUserInput } from "../schemas/userSchema";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    log.info(user);
    return user;
  } catch (err: any) {
    log.error(err);
    return res.status(500).send(err.message);
  }
}
