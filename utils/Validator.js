const { body, validationResult } = require('express-validator');

// Validation rules for creating and updating a task
const taskValidationRules = () => {
    return [
        body('task')
            .isString()
            .notEmpty()
            .withMessage('Task description is required and must be a string.'),
        body('completed')
            .optional()
            .isBoolean()
            .withMessage('Completed status must be a boolean value.'),
    ];
};

// Middleware to validate the request
const validateTask = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ "tasks":"Task description is required and must be a string or notempty","completed":"it msust be boolean"});
    }
    next();
};

module.exports = {
    taskValidationRules,
    validateTask,
};