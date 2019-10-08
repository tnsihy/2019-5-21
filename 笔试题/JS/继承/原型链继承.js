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

// 原型链继承 将父类的实例作为子类的原型
function Cat(){

}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

var cat = new Cat();
console.log(cat.name); // cat 
console.log(cat.eat('fish')); // cat正在吃fish
console.log(cat.sleep()); // cat正在睡觉！
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // true