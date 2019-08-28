// 首先是jQuery的写法
$.ajax({
    url:'',
    type:'',
    dataType:'',
    data:{

    },
    success:function(){

    },
    error:function(){

    }
})

// 使用原生JS实现ajax
var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function(){
    if(ajax.readyState == 4 && ajax.status == 200){
        console.log(ajax.responseText);
        // console.log(JSON.parse(ajax.responseText));
    }else{
        console.log(ajax.status);
    }
}

ajax.open('GET','index.json',false);  // true为异步 false为同步
ajax.send();