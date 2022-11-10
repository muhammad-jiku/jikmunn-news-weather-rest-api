// external imports
import express, { Application } from "express";

// initializing app config
const init = (): Application => {
  let app = express();

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
