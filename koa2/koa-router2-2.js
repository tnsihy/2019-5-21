/**
 * 给不同路由加层级
 */
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

// 子路由home
const home = new Router();
home
    .get('/tnsihy',async(ctx,next)=>{
    ctx.body = 'Home-router /tnsihy page';
})
    .get('/todo',async(ctx,next)=>{
        ctx.body = 'Home-router /todo page';
    })

// 子路由page
const page = new Router();
page
    .get('/tnsihy',async(ctx,next)=>{
    ctx.body = 'Page-router /tnsihy page';
})
    .get('/todo',async(ctx,next)=>{
        ctx.body = 'Page-router /todo page';
    })

// 父级路由
const router = new Router();

// 装载子路由到父路由上
router
    .use('/home',home.routes(),home.allowedMethods())
    .use('/page',page.routes(),page.allowedMethods())

// 装载父路由到koa上
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('[demo] Starting at port 3000');
})