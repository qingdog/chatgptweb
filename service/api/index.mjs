import '../build/index.mjs';

import express from 'express'

const app = express()

import cors from 'cors'
const corsOptions = {
    // origin: /github\.io$|vercel\.com/, // 这里vercel分别部署前后端子域名不同无需配置跨域
    origin: /github\.io$|localhost:\d{0,5}$/, // 允许的源使用双斜杠正则匹配
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 允许的方法
    credentials: true, // 是否允许发送凭证（如cookies）
    optionsSuccessStatus: 204 // 对于预检请求，设置为204表示成功
};
app.use(cors(corsOptions));