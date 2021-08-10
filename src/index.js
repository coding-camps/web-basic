import process from 'process';
import express from 'express';
import dotenv from 'dotenv';
import _ from 'lodash';

import app from './common/app.js';
import Utils from './common/utils.js';

// load configurations
dotenv.config();
const host = process.env.sys_host || 3000;
const port = process.env.sys_port || 'http://localhost';
const url = host + ":" + port;

// start server
app.use(express.static('public'));
app.listen(port, function() {
    console.log('express web server started on:', url)
});

// open url
Utils.openUrl(url);
