// external imports
import express, { Application, Request, Response } from "express";

const routes = (app: Application) => {
  app.get("/healthcheck", (req: Request, res: Response) =>
    res.status(200).send({
      message: "Hello there! Welcome here!!",
    })
  );
};

export default routes;
