require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const config = require('./config.js')
const errorHandler = require('../utils/errorHandler.js');

function ExpressConfig(app) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json({ extended: true }));
    app.use(cookieParser());
    app.use(cors({
        origin: config.origin,
        methods: ['GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS'],
        credentials: true,
        allowedHeaders: 'Content-Type, auth, Set-Cookie',
        exposedHeaders: 'Set-Cookie',
    }));
    app.use(errorHandler);
};

module.exports = ExpressConfig;