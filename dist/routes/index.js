"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var PoolRoutes_1 = require("../modules/pool/routes/PoolRoutes");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.use('/pools', PoolRoutes_1.PoolRoutes);
//# sourceMappingURL=index.js.map