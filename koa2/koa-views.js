/**
 * 解决问题：不可能把html代码全部写在js中
 * Koa2模板 
 * koa-views中间件 npm install --save koa-views
 * ejs模板引擎 npm install --save ejs
 */
const Koa = require('koa');
// 引入模板koa-views
const views = require('koa-views');
// node原生 路径
const path = require('path');
const app = new Koa();

// 加载模板引擎
// path.join()合并提供的路径片段
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
}))

app.use(async(ctx,next)=>{
    let title = 'Hello koa-views';
    await ctx.render('index',{
        // 传递一个title
        title
    })
})

app.listen(3000,()=>{
    console.log('[demo] Starting at port 3000');
})