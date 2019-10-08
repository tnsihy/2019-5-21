// 定义一个父类
function Animal(name){
    this.name = name || 'Animal';
    this.sleep = function(){
        console.log(this.name + '正在睡觉！');
    }
}

// 原型方法
Animal.prototype.eat = function(food){
    console.log(this.name + '正在吃' + food);
}

// 寄生式继承  
function Cat(name){
    Animal.call(this);
    this.name = name || 'Tom';
}

(function(){
    // 创建一个没有实例方法的类
    var Super = function(){};
    Super.prototype = Animal.prototype;
    // 将实例作为子类的原型
    Cat.prototype = new Super();
})();

var cat = new Cat();
console.log(cat.name); // Tom 
console.log(cat.sleep()); // Tom正在睡觉！
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // true

Cat.prototype.constructor = Cat; // 需要修复下构造函数

