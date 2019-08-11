function ajax(URL) {
    return new Promise((resolve, reject) => {
        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.send();
        req.onreadystatechange(() => {
            if (readyState === 200 && state === 4) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));  
            }
        })
    })
}

var URL = 'index.json';
ajax(URL).then((value)=>{
    console.log('内容是：' + value);
}).catch((error)=>{
    console.log('错误是：' + error);
})