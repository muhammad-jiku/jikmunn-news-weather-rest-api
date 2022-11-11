import express, { Request, Response, Router } from "express";

// declaring handler funtion
export type Handler = (req: Request, res: Response) => void;

// declaring interface type
export interface IRoute {
  http: string;
  path: string;
  handler: Handler;
}

const routes: IRoute[] = [
  {
    http: "get",
    path: "/",
    handler: (req: Request, res: Response) => {
      res.send({ message: "Daily routine is genuinely great!" });
    },
  },
  {
    http: "get",
    path: "/welcome",
    handler: (req: Request, res: Response) => {
      res.send({ message: "This is welcome message for all of you!" });
    },
  },
];

// defining router
const router: Router = express.Router();

routes.forEach((route) => {
  (router as any)[route.http](route.path, route.handler);
});

export default router;
