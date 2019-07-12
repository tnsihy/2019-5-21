/**
 * koa-static静态资源访问 npm install --save koa-static
 */
const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const app = new Koa();

app.use(static(path.join(__dirname,'/static')));

app.use(async(ctx,next)=>{
    ctx.response.body = 'Hello koa-static';
})

app.listen(3000,()=>{
    console.log('[demo] Starting at port 3000');
})

// 输入http://localhost:3000/style.css就可以访问到sytle.css