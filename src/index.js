import express from 'express';
import dotenv from 'dotenv';
import _ from 'lodash';

import Utils from './common/utils.js';

// load configurations
dotenv.config();
const host = process.env.sys_host;
const port = process.env.sys_port;
const url = host + ":" + port;

// start server
const app = express();
app.use(express.static('public'));
app.listen(port);

// open url
Utils.openUrl(url);
console.log('express web server started on:', url);
