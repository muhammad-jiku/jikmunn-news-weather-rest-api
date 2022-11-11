// external imports
import logger from "pino";
import dayjs from "dayjs";

// defining log
const log = logger({
  transport: {
    target: "pino-pretty",
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
