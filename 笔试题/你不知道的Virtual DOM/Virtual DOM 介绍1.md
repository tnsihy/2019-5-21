学习网址：https://segmentfault.com/a/1190000016129036

> VD是什么?

一个简单的JS对象  
最少包含`tag`（标签）、`props`（属性）、`children`（子元素对象）属性  

> 为什么需要VD?  

在进行网页更新时，借助VD，DOM元素的改变可以在内存中进行比较，再结合框架的事务机制将多次比较的结果合并后一次性更新到页面。从而有效`减少渲染次数，提高渲染效率`。  

网页的更新一般会是：  
- JS计算
- 生成渲染树
- 绘制页面

---
> 如何实现VD与真实DOM的映射?  

先从如何生成VD说起。  
`借助JSX编译器`  
1.可以将文件中的HTML转化成函数的形式；  
2.然后再利用该函数生成VD。

```JS
function render(){
    return {
        <div>
            Hello World
            <ul>
                <li id="1" class="li-1">
                    第1
                </li>
            </ul>
        </div>
    };
}
=====>>>> 
// 通过JSX编译器后，会输出以下内容：
function render(){
    return h(
        "div",
        null,
        "Hello World",
        h(
            "ul",
            null,
            h(
                "li",
                {id:"1","class":"li-1"},
                '\u7B2C1'
            );
        )
    )
}
```    
> 这里的h是一个函数，可以是任意名字，如何设置?  
```JS
// .babelrc文件
{
    "plugins":[
        ["transform-react-jsx",{
            "pragma":"h" 
        }]
    ]
}
```

> 接下来只需要定义h函数，就能构造出VD
```JS
function h(tag,props,...children){
    return{
        tag,
        props:props|| {},
        children:flatten(children) || []
    }    
}

function flatten(arr){
    return [].concat.apply([],arr);   // 如果arr有多层属性的话利用concat合并为一个数组
}
```

> 执行h函数之后，最终会得到下面的VD对象：  
```JS
{
    tag: "div",
    props: {},
    children: [
        "Hello World", 
        {
            tag: "ul",
            props: {},
            children: [{
                tag: "li",
                props: {
                    id: 1,
                    class: "li-1"
                },
                children: ["第", 1]
            }]
        }
    ]
}
``` 

> 下一步，通过遍历VD对象，生成真实的DOM
```JS
// 创建DOM元素
function createElement(vdom){
    // 如果vdom是字符串或者数字类型，则创建文本节点，比如“Hello World”
    if(typeof vdom === "string" || typeof vdom === "number"){
        return document.createTextNode(vdom);
    }

    const {tag,props,children} = vdom;

    // 1.创建元素
    const element = document.createElement(tag);

    // 2.属性赋值
    setProps(element,props);

    // 3.创建子元素
    // appendChild在执行的时候，会检查当前的this是不是dom对象，因此要bind一下
    children
        .map(createElement)
        .forEach(element.appendChild.bind(element));
    return element;
}

// 属性赋值
function setProps(element, props) {
    for (let key in props) {
        element.setAttribute(key, props[key]);
    }
}
```
createElement函数执行完后，dom元素就创建完并展示到页面上了。  

上面讲解了：
- 如何利用JSX编译HTML标签
- 然后生成VD
- 进而创建真实DOM的过程