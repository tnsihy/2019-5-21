function A(name,age){
    this.name = name;
    this.age = age;
}

function B(){
    this.sayHello = function(){
        console.log(this.name,this.age);
    }
}

A.prototype = new B();
var a = new A("tnsihy",20);
a.sayHello();