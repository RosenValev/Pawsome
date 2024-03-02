const express = require('express');
const expressConfig = require('./config/expressConfig.js');
const dbConnect = require('./config/dbConfig.js');
const config = require('./config/config.js')

const app = express();
expressConfig(app);

dbConnect()
    .then(() => {
        console.log('DB connected successfully')
        app.listen(config.port, () => console.log(`Server is listening on port ${config.port}`))
    })
    .catch(error => console.log('DB error : ', error));

// routesConfig(app);