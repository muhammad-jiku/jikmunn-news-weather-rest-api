"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
exports.routes = [
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
//# sourceMappingURL=routes.js.map