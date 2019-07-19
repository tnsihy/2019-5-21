var app = new Vue({
    el:'#app',
    data:{
        // timeNow是目前的时间
        timeNow:(new Date()).getTime(),
        // timeBefore是一个写死的时间 为2019-07-17 时间戳为毫秒级
        timeBefore: 1563292800
    }
})