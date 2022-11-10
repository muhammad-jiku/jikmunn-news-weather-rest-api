// external imports
import express, { Application, Request, Response } from "express";

// declaring handler funtion
export type Handler = (req: Request, res: Response) => void;

// declaring interface type
interface IRoute {
  http: string;
  path: string;
  handler: Handler;
}

// initializing app config
const init = (): Application => {
  let app = express();

  let routes: IRoute[] = [
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

  routes.forEach((route) => {
    (app as any)[route.http](route.path, route.handler);
  });

  app.use("/", (req, res) => {
    res.send({ message: "Welcome here!" });
  });

  return app;
};

// declaring port
const port = (process.env.PORT || 4000) as Number;

// calling init function
const app = init();

// listening to the port
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
