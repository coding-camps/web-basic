import process from 'process';
import os from 'os';

import express from 'express';
import dotenv from 'dotenv';

import app from './common/app.js';
import Utils from './common/utils.js';
import routers from './common/routers.js';

// load configurations
dotenv.config();
const host = process.env.sys_host || 3000;
const port = process.env.sys_port || 'http://localhost';
const url = host + ":" + port;
const res_root_cnt = process.env.res_root_cnt || 0;
const res_roots = [];
const user_home = os.homedir();
for(let i = 0; i<res_root_cnt; i++) {
    res_roots.push(process.env['res_root_'+(i+1)].replace("~", user_home));
}

// start server
app.use(express.static('public'));
res_roots.forEach((e, i)=>{
    app.use(express.static(res_roots[i]));
})
app.listen(port, function() {
    console.log('express web server started on:', url)
});

// use routers
routers();

// open url
Utils.openUrl(url);
