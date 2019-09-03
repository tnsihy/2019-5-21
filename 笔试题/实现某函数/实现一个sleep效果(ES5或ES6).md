> `使用Promise`
```
function sleep(ms){
    var temple = new Promise(resolve=>{
        console.log('111');
        setTimeout(resolve,ms);
    });
    return temple;
}

sleep(500).then(function(){
    console.log('222');
})
```
> `使用async`
> `使用generator`