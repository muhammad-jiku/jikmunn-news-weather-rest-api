"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// defining routes
const routes = (app) => {
    app.get("/healthcheck", (req, res) => res.status(200).send({
        message: "Hello there! Welcome to check health section!!",
    }));
};
exports.default = routes;
//# sourceMappingURL=routes.js.map