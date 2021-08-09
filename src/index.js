import os from 'os';
import {exec} from 'child_process';
import express from 'express';
import dotenv from 'dotenv';

const app = express();
app.use(express.static('public'));

const port = 3001;
app.listen(port);

const url = 'http://127.0.0.1:' + port;

switch(os.platform()) {
    case 'darwin':
        exec('open '+url);
        break;
    case 'win32':
        exec('start ' + url);
        break;
    case 'linux':
        exec('xdg-open', url);
        break;
}

console.log('OS:', os.platform());
console.log('express web server started.');
console.log(url);

const env = dotenv.config();
console.log(env.parsed);
