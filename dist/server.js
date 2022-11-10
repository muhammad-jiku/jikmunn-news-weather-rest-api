"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// external imports
const express_1 = __importDefault(require("express"));
// initializing app config
const init = () => {
    let app = (0, express_1.default)();
    let routes = [
        {
            http: "get",
            path: "/",
            handler: (req, res) => {
                res.send({ message: "Daily routine is genuinely great!" });
            },
        },
        {
            http: "get",
            path: "/welcome",
            handler: (req, res) => {
                res.send({ message: "This is welcome message for all of you!" });
            },
        },
    ];
    routes.forEach((route) => {
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