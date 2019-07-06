/*exports.world = function(){
    console.log('hello world');
}*/

/* 
有时候想把一个对象封装到模块中
module.exports = function(){
    ...
}
*/
function Hello(){
    var name;
    this.setName = function(thyName){
        name = thyName;
    }
    this.sayHello = function(){
        console.log('Hello' + name);
    }
}
module.exports = Hello;