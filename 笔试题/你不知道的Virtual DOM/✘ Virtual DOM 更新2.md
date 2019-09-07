> 实现一个简单的VD Diff算法，计算出差异并反映到真实的DOM上。  

一般的设计思路是`页面等于页面状态的映射`，即`UI=render(state)`。  
当需要更新页面时，只需要改变`state`即可，剩下的事情(render)将由框架代劳。  
我们考虑最简单的情况，当state发生变化时，重新生成整个VD，触发比较的操作。  
分为以下四步：
- state变化，生成新的VD
- 比较VD与之前VD的异同
- 生成差异对象`patch`
- 遍历差异对象并更新DOM 

差异对象的数据结构，与每一个VDOM元素一一对应：
```JS
{
    type,
    vdom,
    props:[{
        type,
        key,
        value
    }]
    children
}
```
最外层的type对应的是DOM元素的变化类型，有4种：新建、删除、更新、替换  
props变化的type只有2种：更新、删除。枚举值如下：
```JS
const nodePatchTypes = {
    CREATE:"create node",
    REMOVE:"remove node",
    UPDATE:"update node",
    REPLACE:"replace node"
}

const propPatchTypes = {
    REMOVE:"remove node",
    UPDATE:"update node"
}
```

> 代码实现  

做一个定时器，500ms运行一次，每次对state加1。页面的li元素的数量随着state改变。
```JS
let state = { num:5};   
let timer;
let preVDom;

function render(element){
    // 初始化的VD
    const vdom = view();
    preVDom = vdom;

    const dom = createElement(vdom);
    element.appendChild(dom);

    timer = setInterval(()=>{
        state.num += 1;
        tick(element);
    },500);
}

function tick(element){
    if(state.num > 20){
        clearTimeout(timer);
        return;
    }

    const newVDom = view();
}

function view(){
    return {
        <div>
            Hello World!
            <ul>
                {
                    // 生成元素为0到n-1的数组
                    [...Array(state.num).keys()]
                        .map((i)=>{
                            <li id={i} class={`li-${i}`}>
                                第{i * state.num}
                            </li>
                        })
                }  // ????
            </ul>
        </div>
    }
}
```