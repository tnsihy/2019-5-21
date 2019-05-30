let proxy = new Proxy({
    name:'Tom',
    age:18
},{
    ownKeys:function(target){
        return ['name'];
    }
});
Object.keys(proxy);
console.log(Object.keys(proxy)) //