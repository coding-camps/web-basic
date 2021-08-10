import express from 'express';
import dotenv from 'dotenv';
import _ from 'lodash';

import Utils from './common/utils.js';

// load configurations
const env = dotenv.config();
const props = env.parsed;
let port = _.get(props, 'port');
let url = _.get(props, 'url');

// start server
const app = express();
app.use(express.static('public'));
app.listen(port);

// open url
Utils.openUrl(url+":"+port);
console.log('express web server started.');
console.log(url+":"+port);
