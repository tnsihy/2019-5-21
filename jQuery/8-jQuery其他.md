在页面上同时使用jquery和其他框架  
1.使用noConflict()方法 会释放对$标识符的控制  
```
$.noConflict()
jQuery(document).ready(function(){
    jQuery('button').click(function(){
        jQuery('p').text('jQuery is still working!')
    })
})
```

2.也可以创建自己的简写
```
var jq = $.noConflict()
jq(document).ready(function(){
    jq('button').click(function(){
        jq('p').text('jQuery is still working!')
    })
})
```

3.仍想用$简写，可以把$符号作为变量传递给ready方法
```
$.noConflict()
$(document).ready(function($){
    $('button').click(function(){
        $('p').text('jQuery is still working!')
    })
})
```

