import { Request, Response } from "express";
import { omit } from "lodash";

// internal imports
import { createUser } from "../services/userServices";
import log from "../utilities/logger";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    log.info(user);
    return user;
  } catch (e: any) {
    log.error(e);
    return res.status(500).send(e.message);
  }
}
