async function timeout(flag){
    if(flag){
        return 'Hello World'
    }else{
        throw 'my god,failure'
    }
}
console.log(timeout(true));
console.log(timeout(false));