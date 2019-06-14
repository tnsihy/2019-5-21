1.认识MVVM模式(Model-View-ViewModel)  
View 和 ViewModel之间通过双向绑定(data-binding)建立联系

// jQuery语法  
```
if(showBtn){
    var btn = $('<button>Click me</button>');
    btn.on('click',function(){
        console.log('Clicked!');
    });
    $('#app').append(btn);
}
```
// Vue.js通过MVVM模式拆分为视图与数据两部分，并将其分离
```
<body>
    <div id="app">
        <button v-if="showBtn" v-on:click="handleClick">Clicked me</button>
    </div>
</body>
<script>
  new Vue({
      el:'#app',
      data:{
          showBtn:true
      },
      methods:{
          handleClick : function(){
              console.log('Clicked!');
          }
      }
  })
</script>
```