// external imports
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import config from "config";

// internal imports
import routes from "./routes/routes";
import log from "./utilities/logger";
import dataabaseConnect from "./utilities/databaseConnect";

// declaring port and host
const port = config.get("port") as number;
const host = config.get("host") as string;

// initializing app
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, host, async () => {
  log.info(`Server is running at http://${host}:${port}`);

  // database connection
  await dataabaseConnect();

  // routes setup
  routes(app);
});
