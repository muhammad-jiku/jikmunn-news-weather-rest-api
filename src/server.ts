// external imports
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import config from "config";

// internal imports
import log from "./utilities/logger";
import routes from "./routes/routes";

// declaring port and host
const port = config.get("port") as number;
const host = config.get("host") as string;

// initializing app
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, host, () => {
  log.info(`Server is running at http://${host}:${port}`);

  routes(app);
});
