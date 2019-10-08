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

// 组合继承（组合原型链继承和借用构造函数继承）
function Cat(name){
    Animal.call(this);
    this.name = name || 'Tom';
}
Cat.prototype = new Animal();

Cat.prototype.constructor = Cat;

var cat = new Cat();
console.log(cat.name); // Tom 
console.log(cat.sleep()); // Tom正在睡觉！
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // true