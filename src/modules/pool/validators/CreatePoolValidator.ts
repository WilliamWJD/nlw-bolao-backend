import { Segments, Joi } from 'celebrate';

const createPoolValidator = {
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().messages({
            'string.empty': 'Title is not empty',
            'any.required': 'Title is required'
        }),
        code: Joi.string().required().messages({
            'string.empty': 'Code is not empty',
            'any.required': 'Code is required'
        })
    })
}

export { createPoolValidator }