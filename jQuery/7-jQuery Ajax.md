AJAX 是与服务器交换数据的技术，它在不重载全部页面的情况下，实现了对部分网页的更新。

-load()方法  从服务器加载数据，并把返回的数据放入被选元素中  

$(selector).load(URL,data,callback)  
必需的 URL 参数规定您希望加载的 URL  
可选的 data 参数规定与请求一同发送的查询字符串键/值对集合  
可选的 callback 参数是 load() 方法完成后所执行的函数名称  

把文件"demo1.txt"的内容加载到指定的`<div>`元素中：
```
$('div').load('demo1.txt')
```

把文件"demo1.txt"中id="p1"的元素的内容加载到指定`<div>`元素中：
```
$('div').load('demo1.txt #p1')
```

可选的callback参数规定当load()方法完成后所要允许的回调函数，有参数如下
responseTxt-包含调用成功时的结果内容  
statusTxt-包含调用的状态  
xhr-包含XMLHttpRequest对象  

在 load() 方法完成后显示一个提示框。如果 load() 方法已成功，则显示"外部内容加载成功！"，而如果失败，则显示错误消息：
```
$("button").click(function(){
    $('#div').load('demo1.txt',function(responseTxt,statusTxt,xhr){
        if(statusTxt == 'success'){
            alert('外边内容加载成功！')
        }
        if(statusTxt == 'error'){
            alert('Error:' + xhr.status + xhr.statusText)
        }
    })
})
```