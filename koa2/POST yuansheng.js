/**
 * 对于POST请求，Koa2没有封装方便获取参数的方法
 * 需要通过解析上下文ctx中原生node.js请求对象req来获取
 * 
 * 获取POST请求的步骤：
 *  - 解析ctx中的原生nodejs对象req
 *  - 将POST表单数据解析成querystring字符串 通过Promise async await
 *  - 将字符串转换成JSON格式
 */
const Koa = require('koa');
var app = new Koa();

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
        let postData = await parsePostData(ctx);
        ctx.body = postData;
        // 输入表单信息提交后 结果为：userName=tnsihy&age=20&process=student
    }else{
        ctx.body = `<h1>404 NOT FOUND!</h1>`;
    }
});

// 将字符串转换为JSON 可以直接使用中间件koa-bodyparser
function parseQueryData(queryStr){
    // 声明空对象用来存放
    let queryData = {};
    // 拆分成数组
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    /*
    ['userName=tnsihy',
    'age=20',
    'process=student']
    */
    //entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)
    for(let [index,queryStr] of queryStrList.entries()){
        let itemList = queryStr.split('=');
        console.log(itemList);
        /*
        ['username','tnsihy']
        ['age','20']
        ['process','student']
        */
       queryData[itemList[0]] = decodeURIComponent(itemList[1]);
       console.log(queryData);
       /*
       { userName: 'tnsihy', age: '20', process: 'student' }
       */
    }
    return queryData;
} 

// 解析POST数据
function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            // 定义一个变量，来暂存POST请求体信息
            let postData = '';
            // 通过ctx.req的data监听事件，每次收到请求体的数据，就累加到postData中
            // ctx.req:是context提供的node.js原生HTTP请求对象
            ctx.req.on('data',(data)=>{
                postData += data;
            })
            // 触发end事件
            ctx.req.on('end',()=>{
                // 对数据进行处理
                let parseData = parseQueryData(postData);
                resolve(parseData);
            })
        }catch(error){
            reject(error);
        }
    })
}

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})