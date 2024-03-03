const usersRouter = require('express').Router();
const authController = require('../controllers/auth.js');
const { loginValidation, registerValidation } = require('../utils/userValidations.js');
const authMiddleware = require('../utils/authMiddleware.js')

usersRouter.post('/login', loginValidation, authController.login)
usersRouter.post('/register', registerValidation, authController.register)
usersRouter.post('/logout', authMiddleware, authController.logout)

module.exports = usersRouter;