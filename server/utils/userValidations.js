const { body } = require('express-validator');


const loginValidation = [
    body('username').notEmpty().withMessage('Username is required!').toLowerCase().trim(),
    body('password').notEmpty().withMessage('Password is required!').trim(),
];

const registerValidation = [
    body('username').notEmpty().withMessage('Username is required!').toLowerCase().trim(),
    body('email')
        .notEmpty()
        .withMessage('Email is required!')
        .toLowerCase()
        .trim()
        .isEmail()
        .withMessage('Email address is not valid!'),
    body('password')
        .notEmpty()
        .withMessage('Password is required!')
        .trim()
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .matches(/\d/)
        .withMessage('Password must contain at least 1 digit'),
];

module.exports = {
    loginValidation,
    registerValidation
}