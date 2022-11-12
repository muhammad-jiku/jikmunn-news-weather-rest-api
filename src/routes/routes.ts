// external imports
import { Express, Request, Response } from "express";

// internal imports
import { createUserHandler } from "../controllers/userController";
import validate from "../middlewares/validateResource";
import { createUserSchema } from "../schemas/userSchema";

// defining routes
const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response) =>
    res.status(200).send({
      message: "Hello there! Welcome to check health section!!",
    })
  );

  // registering user
  app.post(" /signup", validate(createUserSchema), createUserHandler);
};

export default routes;
