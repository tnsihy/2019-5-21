Vue.directive('clickoutside',{
    bind:function(el,binding,vnode){
        function documentHander(e){
            // 判断点击的区域是否是指令所在的元素内容 是就跳出函数
            if(el.contains(e.target)){
                return false
            }
            if(binding.expression){
                // 用来执行当前上下文methods中指定的函数
                binding.value(e)
            }
        }
        // 自定义组件中不能使用this.XXX的形式声明一个变量 用el._vueClickOutSide_引用了documentHander
        el._vueClickOutSide_ = documentHander
        document.addEventListener('click',documentHander)
    },
    unbind:function(el,binding){
        document.removeEventListener('click',el._vueClickOutSide_)
        delete el._vueClickOutSide_
    }
})