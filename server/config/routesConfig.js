const userRouter = require('../routes/userRoutes.js')
const blogRouter = require('../routes/blogRouter.js')

function routesConfig(app) {
    app.use('/users', userRouter);
    app.use('/blog', blogRouter);
};

module.exports = routesConfig