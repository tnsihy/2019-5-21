Ajax提交表单分为两种：  
1.无返回结果，把表单直接提交到后台。  
2.有返回结果，最终的信息要返回给前台。ajax本身属于有返回结果的一类，其中的success方法就是处理后台返回结果的。  

Ajax提交表单有返回结果的有两种实现方式  
1.将form表单数据序列化
```
<span>
    $.ajax({
        type:"POST",
        url:"",
        data:$("#formid").serialize(),
        async:false,
        error:function(request){
            alert("Contention error)
        },
        success:function(data){
            //接收后台返回的数据
        }
    })
</span>
```
使用这种实现方式的前提是 form表单中的每一项都要有name属性，后台获取的键值对是key=name值，value=各项值。  

2.通过窗口查找form提交
```
<span>
    var obj = document.getElementById('xx_iframe').contentWindow;
    obj.$("#yourform).form("submit",{
        success:function(data){
            //对结果处理
        }
    })
</span>
```
