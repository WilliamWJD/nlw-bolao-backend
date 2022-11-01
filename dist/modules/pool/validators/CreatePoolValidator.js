"use strict";
var _a;
exports.__esModule = true;
exports.createPoolValidator = void 0;
var celebrate_1 = require("celebrate");
var createPoolValidator = (_a = {},
    _a[celebrate_1.Segments.BODY] = celebrate_1.Joi.object().keys({
        title: celebrate_1.Joi.string().required().messages({
            'string.empty': 'Title is not empty',
            'any.required': 'Title is required'
        }),
        code: celebrate_1.Joi.string().required().messages({
            'string.empty': 'Code is not empty',
            'any.required': 'Code is required'
        })
    }),
    _a);
exports.createPoolValidator = createPoolValidator;
//# sourceMappingURL=CreatePoolValidator.js.map