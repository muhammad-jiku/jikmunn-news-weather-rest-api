// external imports
import express, { Application } from "express";

// initializing app config
const init = (): Application => {
  let app = express();

  let routes = [
    {
      http: "get" as any,
      path: "/welcome",
      handler: (req: express.Request, res: express.Response) => {
        res.send({ message: "This is welcome message for all of you!" });
      },
    },
  ];

  app.get("/", (req, res) => {
    res.send({ message: "Daily routine is genuinely great!" });
  });

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
