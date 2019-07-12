/**
 * 使用koa-router中间件配置路由
 * 入门
 */

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 接收请求
router.get('/', async (ctx, next) => {
    ctx.body = `<h1>Hello koa-router</h1>`;
})
/* 多页面配置
router
    .get('/',async(ctx,next)=>{
        ctx.body = `<h1>Hello koa-router</h1>`
    })
    .get('/todo',async(ctx,next)=>{
        ctx.body = `<h1>Todo page</h1>`
    })
*/

// 路由装载 *官方
app.use(router.routes());
app.use(router.allowedMethods());
/* 或者写
app
    .use(router.routes())
    .use(router.allowedMethods());
*/

app.listen(3000, () => {
    console.log('[demo] Starting at port 3000');
})