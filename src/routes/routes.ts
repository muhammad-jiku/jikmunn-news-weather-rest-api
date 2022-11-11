// external imports
import { Express, Request, Response } from "express";

// defining routes
const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response) =>
    res.status(200).send({
      message: "Hello there! Welcome to check health section!!",
    })
  );
};

export default routes;
