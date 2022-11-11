// external imports
import mongoose from "mongoose";
import config from "config";

// connecting database
const dataabaseConnect = async () => {
  const dbUri = config.get("dbUri") as string;

  try {
    await mongoose.connect(dbUri);
    console.log("DB connected");
  } catch (error) {
    console.log("Could not connect to db");
    process.exit(1);
  }
};

export default dataabaseConnect;
