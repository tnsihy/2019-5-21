/**
 * 层级
 * 设置前缀prefix
 */
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
// 前缀
const router = new Router({
    prefix:'/tnsihy'
});

router
    .get('/',async(ctx,next)=>{
        ctx.body = `<h1>Hello koa-router</h1>`
    })
    .get('/todo',async(ctx,next)=>{
        ctx.body = `<h1>Todo page</h1>`
    })

//装载路由 
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('[demo] Starting at port 3000');
})