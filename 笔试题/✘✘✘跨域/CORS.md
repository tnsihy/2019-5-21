服务端设置`Access-Control-Allow-Origin`即可，前端无需设置。  
若要带cookie请求，前后端都需要设置。  

> 前端设置  

`xhr.withCredentials = true`  

示例代码：
> 原生ajax
```
var xhr = new XMLHttpRequest();

//前端设置是否带cookie
xhr.withCredentials = true;

xhr.open("POST","http://localhost:8888",true);
xhr.setRequestHeader("Content-Type":"application/x-www-form-urlencoded");
xhr.send("user=admin");

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        alert(xhr.responseText);
    }
};
```

> jquery ajax
```
$.ajax({
    ...
    xhrFields:{
        // 前端设置是否带cookie
        withCredentials:true
    },
    // 会让请求头中包含跨域的额外信息，但不会含cookie
    crossDomain:true,
    ...
})
```

> vue  

`axios.defaults.withCredentials = true`

> vue-resource设置  
> 
`Vue.http.options.credentials = true`

---

> 服务端设置：
> java后台  
```
// 导入包import javax.servlet.http.HttpServletResponse;

```

