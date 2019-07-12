/**
 * koa-router传递参数 POST
 */
const Koa = require('koa');
const Router = require('koa-router');
// 接收POST请求
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router
    .get('/user',async(ctx,next)=>{
        let html = `
            <form action="/user/register" method="POST">
                用户名：<input type="text" name="name" placeholder="请输入用户名：tnsihy"><br>
                密码：<input type="text" name="password" placeholder="请输入密码：123456"><br>
                <input type="submit">
            </form>
        `;
        ctx.response.body = html;
    })
    // 增加响应表单请求的路由
    .post('/user/register',async(ctx,next)=>{
        
        // 输出{ name: 'tnsihy', password: '123456' }
        console.log(ctx.request.body);
        let {name,password} = ctx.request.body;

        if(name === 'tnsihy' && password === '123456'){
            ctx.response.body = `Hello ${name}`;
        }else{
            ctx.response.body = 'Error Message';
        }
    })

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('[demo] Starting at port 3000');
})