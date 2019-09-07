> Virtual DOM是什么?

`虚拟DOM`  
用JS模拟DOM结构  
DOM变化的对比，放在JS层来做  
提高`重绘`性能  

> 真实的HTML DOM结构
```
<ul id="list">
    <li class="item">Item 1</li>
    <li class="item">Item 2</li>
</ul>
```

> 用JS模拟这个DOM
```
{
    tag:"ul",
    attrs:{
        id:"list"
    }
    children:[
        {
            tag:"li",
            attrs:{ className:"item"},
            children:["Item 1"]
        },{
            tag:"li",
            attrs:{ className:"item"},
            children:["Item 2"]
        }
    ]
}

// 用h方法表示这个DOM节点：
var vnode = h("ul#list",{},[
    h("li.item",{},"Item 1"),
    h("li.item",{},"Item 2")
]);
```

DOM操作十分“昂贵”，看似更加复杂的JS模拟DOM实则效率更高。 

> Virtual DOM如何应用? 核心API?

能实现Virtual dom的库很多：比如snabbdom：
#### 可查看Virtual DOM.js文件。  

```
h('<标签名>', {属性}, [子元素])

h('<标签名>', {属性}, '文本字符串')

初次渲染：patch(container, vnode)

再次修改后DOM渲染：patch(vnode, newVnode)

```


