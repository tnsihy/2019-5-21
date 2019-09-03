`如何实现一个私有变量，用getName方法可以访问，不能直接访问。`
// 1.通过defineProperty来实现
var obj = {
    _name:'tnsihy',
    getName:function(){
        return this._name;
    }
}

Object.defineProperty(obj,"name",{
    set:function(newValue){
        this._name = newValue;
    }
})

obj.name = "Mike";

// 2.通过函数的创建形式
function product(){
    var name = "tnsihy";
    // name没有指定为product的实例obj，如果写this.name = "tnsihy"那么就可以访问到。
    this.getName = function(){
        return name;
    }
}

var obj = new product();