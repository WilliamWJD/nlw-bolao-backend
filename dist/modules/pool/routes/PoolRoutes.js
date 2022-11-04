"use strict";
exports.__esModule = true;
exports.PoolRoutes = void 0;
var celebrate_1 = require("celebrate");
var express_1 = require("express");
var CountPoolController_1 = require("../controllers/CountPoolController");
var CreatePoolController_1 = require("../controllers/CreatePoolController");
var CreatePoolValidator_1 = require("../validators/CreatePoolValidator");
var PoolRoutes = (0, express_1.Router)();
exports.PoolRoutes = PoolRoutes;
var countPoolController = new CountPoolController_1.CountPoolController();
var createPoolController = new CreatePoolController_1.CreatePoolController();
PoolRoutes.get('/count', countPoolController.handle);
PoolRoutes.post('/', (0, celebrate_1.celebrate)(CreatePoolValidator_1.createPoolValidator), createPoolController.handle);
//# sourceMappingURL=PoolRoutes.js.map