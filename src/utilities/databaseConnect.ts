// external imports
import mongoose from "mongoose";
import config from "config";

// internal imports
import log from "./logger";

// connecting database
const dataabaseConnect = async () => {
  const dbUri = config.get("dbUri") as string;

  try {
    await mongoose.connect(dbUri);
    log.info("DB connected");
  } catch (error) {
    log.error("Could not connect to db");
    process.exit(1);
  }
};

export default dataabaseConnect;
