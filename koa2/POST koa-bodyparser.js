/**
 * 对于POST请求的处理
 * koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

// 在代码中使用后可以直接用ctx.request.body进行获取POST请求参数
app.use(bodyParser());

// POST请求
app.use(async(ctx) =>{
    // 起先是手动输入网址时
    if(ctx.url ==='/' && ctx.method === 'GET'){
        // 显示表单页面
        let formPage = `
            <h1>Koa2 request POST</h1>
            <form action="/" method="POST">
                姓名：<input type="text" name="userName"><br/>
                年龄：<input type="text" name="age"><br/>
                职业：<input type="text" name="process">
                <input type="submit">
            </form>
        `;
        ctx.body = formPage;
    }else if(ctx.url === '/' && ctx.method === 'POST'){
        // ctx.body = '接收到POST请求';
        // 使用koa-parser中间件：
        let postData = ctx.request.body;
        ctx.body = postData;
    }else{
        ctx.body = `<h1>404 NOT FOUND!</h1>`;
    }
});

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})