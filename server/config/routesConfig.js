const userRouter = require('../routes/userRoutes.js')

function routesConfig(app) {
    app.use('/users', userRouter);
};

module.exports = routesConfig