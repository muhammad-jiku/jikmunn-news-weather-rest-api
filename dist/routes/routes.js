"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = (app) => {
    app.get("/healthcheck", (req, res) => res.status(200).send({
        message: "Hello there! Welcome here!!",
    }));
};
exports.default = routes;
//# sourceMappingURL=routes.js.map