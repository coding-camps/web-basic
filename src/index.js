import express from 'express';
import dotenv from 'dotenv';
import _ from 'lodash';

import Utils from './common/utils.js';


const app = express();
app.use(express.static('public'));

const port = 3001;
app.listen(port);

const url = 'http://127.0.0.1:' + port;
Utils.openUrl(url);
console.log('express web server started.');
console.log(url);

const env = dotenv.config();
console.log(env.parsed);
console.log(_.VERSION);
console.log(_.chain(env.parsed).pickBy((v,k)=>_.startsWith(k, 'DB_')).value());
