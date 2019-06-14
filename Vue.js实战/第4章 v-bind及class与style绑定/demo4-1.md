2.绑定class的几种方式  
```
对象语法
<div id="app">
    <div :class="{ 'active':isActive }"></div>
    <!-- 类名active依赖于数据isActive，当有true时会拥有类名Active -->
</div>
<script>
    var app = new Vue({
        el:'#app',
        data:{
            isActive:true
        }
    })
</script>
```
```
数组语法
<div id="app">
    <div :class="[activeCls,errorCls]"></div>
</div>
<script>
    var app = new Vue({
        el:'#app',
        data:{
            activeCls : 'active',
            errorCls : 'error'
        }
    })
</script>
渲染后结果为
<div class="active error"></div>
```
```
三元表达式
<div id="app">
    <div :class="[isActive ? activeCls : '',errorCls]"></div>
</div>
<script>
    var app = new Vue({
        el:'#app',
        data:{
            isActive : true,
            activeCls : 'active',
            errorCls : 'error' 
        }
    })
</script>

较为繁琐????? ->在数组中使用对象
<div id="app">
    <div :class="[{'active':isActive},errorCls]"></div>
</div>
<script>
    var app = new Vue({
        el :'#app',
        data:{
            isActive:true,
            errorCls: 'error'
        }
    })
</script>
```
表达式较长或逻辑复杂，优先使用计算属性  

3.绑定内联样式:style  
```
<div id="app">
    <div :style="{ 'color':color,'fontSize':fontSize + 'px'}">文本</div>
</div>
<script>
    var app = new Vue({
        el:'#app',
        data:{
            color:'red',
            fontSize: 14
        }
    })
</script>
渲染后结果为
<div style="color:red;font-size:14px">文本</div>
```
```
改写：
<div id="app">
    <div :style="styles">文本</div>
</div>
<script>
    var app = new Vue({
        el:'#app',
        data:{
            styles:{
                color:'red',
                fontSize: 14 + 'px'
            }
        }
    })
</script>
```