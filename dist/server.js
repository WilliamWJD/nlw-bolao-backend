"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var cors_1 = __importDefault(require("cors"));
var CelebrateError_1 = require("./errors/CelebrateError");
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])({ origin: true }));
app.use(express_1["default"].json());
app.use(routes_1.routes);
app.use(CelebrateError_1.CelebrateErr);
app.listen(3333, function () {
    console.log('Servidor online');
});
//# sourceMappingURL=server.js.map