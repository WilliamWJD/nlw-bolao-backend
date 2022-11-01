"use strict";
exports.__esModule = true;
exports.CelebrateErr = void 0;
var celebrate_1 = require("celebrate");
function CelebrateErr(err, req, res, next) {
    if (err instanceof celebrate_1.CelebrateError) {
        var errorBody = err.details.get('body');
        return res.status(400).json({
            message: errorBody === null || errorBody === void 0 ? void 0 : errorBody.message
        });
    }
    return res.status(500).json({
        status: 'Error',
        message: "Internal server error ".concat(err.message)
    });
}
exports.CelebrateErr = CelebrateErr;
//# sourceMappingURL=CelebrateError.js.map