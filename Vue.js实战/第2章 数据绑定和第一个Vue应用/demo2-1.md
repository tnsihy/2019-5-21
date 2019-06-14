1.jQuery使用ready()方法
```
$(document).ready(function(){
    <!-- DOM加载完成后，会执行这里的代码 -->
})
```
2.常用生命周期  
`created`:实例创建后调用，此阶段完成数据的观测等，但尚未加载，需要初始化处理一些数据时比较有用。  
`mounted`:el挂载到实例上后调用，第一个业务逻辑。  
`beforeDestroy`:实例销毁之前调用，主要解绑一些使用addEventListener监听事件

3.过滤器  
支持在{{}}插值的尾部加一个管道符“(|)”对数据进行过滤

4.语法糖  
`v-bind:src`等价于`:src`  
`v-on:click`等价于`:@click`