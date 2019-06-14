1.计算属性简单例子  
一个计算属性所依赖的数据发生变化时，它才会重新取值，所以text只要不改变，计算属性也就不更新。
```
将
<div id="app">
{{ text.split(',').reverse().join(',') }}
</div>
改写
```
```
<div id="app">{{ reversedText }}</div>
<script>
    var app = new Vue({
        el:'#app',
        data : {
            text : '123,456'
        },
        computed:{
            reversedText : function(){
                return this.text.split(',').reverse().join(',');
            }
        }
    })
</script>
```