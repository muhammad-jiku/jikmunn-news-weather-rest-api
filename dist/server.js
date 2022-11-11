"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// external imports
const express_1 = __importDefault(require("express"));
// internal imports
const routes_1 = require("./routes/routes");
// initializing app config
const init = () => {
    let app = (0, express_1.default)();
    routes_1.routes.forEach((route) => {
        app[route.http](route.path, route.handler);
    });
    app.use("/", (req, res) => {
        res.send({ message: "Welcome here!" });
    });
    return app;
};
// declaring port
const port = (process.env.PORT || 4000);
// calling init function
const app = init();
// listening to the port
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map