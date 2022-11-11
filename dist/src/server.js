"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// external imports
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config_1 = __importDefault(require("config"));
// internal imports
const logger_1 = __importDefault(require("./utilities/logger"));
const routes_1 = __importDefault(require("./routes/routes"));
// declaring port and host
const port = config_1.default.get("port");
const host = config_1.default.get("host");
// initializing app
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.listen(port, host, () => {
    logger_1.default.info(`Server is running at http://${host}:${port}`);
    (0, routes_1.default)(app);
});
//# sourceMappingURL=server.js.map