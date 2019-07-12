const Koa = require('koa');
const app = new Koa();

// GET请求的接收
app.use(async(ctx) =>{
    console.log(ctx);
    let url = ctx.url;
    // - 1.通过request接收GET请求
    let request = ctx.request;
    // query 返回格式好的参数对象
    let req_query = request.query;
    // querystring 返回请求字符串
    let req_querystring = request.querystring;

    // - 2.从ctx上下文直接接收GET请求
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;

    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
});

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000')
})

/**
 * 输入网址http://localhost:3000/?user=tnsihy&age=20有：
{
url: "/?user=tnsihy&age=20",
req_query: {
    user: "tnsihy",
    age: "20"
},
req_querystring: "user=tnsihy&age=20"
}
 */