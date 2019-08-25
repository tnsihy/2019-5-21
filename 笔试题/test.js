function Animal(name){
    // 属性
    this.name = name || 'Animal';
    // 方法
    this.sleep = function(){
        console.log(this.name + '正在睡觉');
    };
}

Animal.prototype.eat = function(food){
    console.log(this.name + '正在吃' + food);
};

console.log(Animal.prototype.name);
