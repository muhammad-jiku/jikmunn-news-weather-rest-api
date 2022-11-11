"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = [
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
// defining router
const router = express_1.default.Router();
routes.forEach((route) => {
    router[route.http](route.path, route.handler);
});
exports.default = router;
//# sourceMappingURL=routes.js.map