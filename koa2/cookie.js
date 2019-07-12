/**
 * 制作登录和保存用户信息在本地，常用Cookie操作
 * ctx.cookies.get(name,[optins]); 读取上下文请求的cookie
 * ctx.cookies.set(name,value,[options]);在上下文中写入cookie
 * 
 * Cookie 需要配置一些选项：
 *  - domain 写入cookie所在的域名
 *  - path 写入cookie所在的路径
 *  - maxAge cookie最大有效时长
 *  - expires cookie失效时间
 *  - httpOnly 是否只用http请求中获得
 *  - overwrite 是否允许重写
 */

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    console.log(ctx.url)
    if (ctx.url === '/index') {
        //写入cookie操作
        ctx.cookies.set('MyName', 'tnsihy', {
            domain: 'localhost',
            // 这里设置了/index 意味着只有当网址是/index/...时cookie存在
            path: '/index',
            maxAge: 1000 * 60 * 60 * 24,
            expires: new Date('2020-12-31'),
            httpOnly: false,
            overwrite: true
        });
        ctx.response.body = 'Cookie is OK!';
    } else {
        // 如果输入网址是/index/...即cookie存在时
        if (ctx.cookies.get('MyName')) {
            ctx.response.body = ctx.cookies.get('MyName');
        } else {
            ctx.response.body = 'No Cookie';
        }
    }
})
//  就可以在页面F12的Application Cookie找到 name value

app.listen(3000, () => {
    console.log('[demo] Starting at port 3000');
})