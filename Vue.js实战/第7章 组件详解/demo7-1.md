1.组件需要注册后才可以使用  

全局注册  
```
Vue.component('my-component',{
    //选项
})
my-component为注册的自定义标签名称

`要在父实例中使用组件，必须要在实例创建前注册，之后就可以用<my-component>的形式来使用组件`:
<div id="app">
    <my-component></my-component>
</div>
<script>
    Vue.component('my-component',{
        template:`<div>这是组件的内容</div>`
    })
    var app = new Vue({
        el:'#app'
    })
</script>

```
局部注册
```
<div id="app">
    <my-component></my-component>
</div>
<script>
    var Child = {
        template:`<div>局部注册组件的内容</div>`
    }
    var app = new Vue({
        el:'#app',
        components:{
            'my-component':Child
        }
    })
</script>
```

2.Vue组件的模板在某些情况会受到HTML的限制，比如`<table>`中规定只能使用`<tr>`、`<th>`等这些表格元素，所以在`<table>`中直接使用组件是无效的，可以使用特殊的属性来挂载组件。常见的限制元素还有`<ul>` `<ol>` `<select>`
```
<div id="app">
    <table>
        <tbody is="my-component"></tbody>
    </table>
</div>
<script>
    Vue.component('my-component',{
        template:`<div>这里是组件的内容</div>`
    })
    var app = new Vue({
        el:'#app'
    })
</script>
如果是字符串模板，是不受限制的
```
除了template选项外，组件中在使用data时，和实例有所区别，data必须是函数，然后将数据return
```
<div id="app">
    <my-component></my-component>
</div>
<script>
    Vue.component('my-component',{
        template:`<div>{{message}}</div>`,
        data:function(){
            return {
                message:'组件内容'
            }
        }
    });
    var app = new Vue({
        el:'#app'
    })
</script>
```