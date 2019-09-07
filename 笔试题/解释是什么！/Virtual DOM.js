/**
 * 其中h方法是创建一个vnode，即虚拟节点。
 * 定义一个div，并带有id为container class为two和classes 绑定click事件调用someFn，跟着数组（3个元素）
 * 第一个patch方法将vnode放入到空的container中。
 * 
 * newVnode是返回一个新的node
 * 第二个patch方法是将前后两个node进行对比，找出区别，只更新需要改动的内容。
 * 其他不变的内容不更新，做到尽可能少的操作DOM。    
 */

var container = document.getElementById('container');
var vnode = h('div#container.two.classes', {
    on: {
        click: someFn
    }
}, [
    h('span', {
        style: {
            fontWeight: 'bold'
        }
    }, 'This is bold'),

    ' and this is just normal text',

    h('a', {
        props: {
            href: '/foo'
        }
    }, 'I\'ll take you places!')
]); // Patch into empty DOM element – this modifies the DOM as a side 

effectpatch(container, vnode);

var newVnode = h('div#container.two.classes', {
    on: {
        click: anotherEventHandler
    }
}, [
    h('span', {
        style: {
            fontWeight: 'normal',
            fontStyle: 'italic'
        }
    }, 'This is now italic type'),
    
    ' and this is still just normal text',
    
    h('a', {
        props: {
            href: '/bar'
        }
    }, 'I\'ll take you places!')
]); // Second `patch` 

invocationpatch(vnode, newVnode); 
// Snabbdom efficiently updates the old view to the new state
