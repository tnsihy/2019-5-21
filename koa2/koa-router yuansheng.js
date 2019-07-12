/**
 * 原生路由的实现 需要得到地址栏输入的路径 
 * 根据路径的不同进行跳转 ctx.request.url可以实现
 * 
 * 原生路由的实现需要引入fs模块来读取文件
 */
const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

// 异步处理
function render(page){
    return new Promise((resolve,reject)=>{
        // 要读取的路径
        // ES5写法: let pageUrl = './page/' + page;
        let pageUrl = `./page/${page}`;
        console.log('pageUrl:',pageUrl);
        // 以binary方式读取 或者utf-8使中文不乱码
        fs.readFile(pageUrl,'utf-8',(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

async function route(url){
    let page = '404.html';
    switch(url){
        case '/':
        case '/index':
            page = 'index.html';
            break;
        case '/todo':
            page = 'todo.html';
            break;
        default:
            break;
    }
    // render渲染 获取文件内容
    let html = await render(page);
    return html;
}

app.use(async (ctx) => {
    let url = ctx.request.url;
    // 获取到url 实现跳转
    let html = await route(url);
    ctx.body = html;
})

app.listen(3000);
console.log('Starting at port 3000');