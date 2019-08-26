`https://segmentfault.com/a/1190000016261602`  

`函数防抖debounce`
- 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

`函数节流throttle`
- 规定在一个单位时间内，只能触发一次函数。如果在该单位时间内触发多次函数，只有一次生效。

/*
节流  
考虑一个场景，滚动事件中会发起网络请求，但是我们并不希望用户在滚动过程中一直发起请求，而是隔一段时间发起一次，对于这种情况我们就可以使用节流。  
个人理解 函数节流就是fps游戏的射速，就算一直按着鼠标射击，也只会在规定射速内射出子弹。  
理解了节流的用途，我们就来实现下这个函数  
*/
function throttle(func,wait=50){
    let lastTime=0;
    return function(...args){
        let now=Date.now();
        if(now-lastTime>wait){
            lastTime=now;
            func.apply(this,args)
        }
    }
}

/*
防抖
考虑一个场景，有一个按钮点击会触发网络请求，但是我们并不希望每次点击都发起网络请求，而是当用户点击按钮一段时间后没有再次点击的情况才去发起网络请求，对于这种情况我们就可以使用防抖。  
个人理解 函数防抖就是法师发技能的时候要读条，技能读条没完再按技能就会重新读条。  
理解了防抖的用途，我们就来实现下这个函数  
*/
function debounce(func,wait=1000){
    var timer=0;
    return function (...args){
        if(timer) clearTimeout(timer)
        timer=setTimeout(() => {
            func.apply(this,args)
        }, wait);
    }
}