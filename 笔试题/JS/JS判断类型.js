// Object.prototye.toString().call(obj)检测对象类型
// toString方法返回反映这个对象的字符串

// [object String]
console.log(Object.prototype.toString.call("tnsihy"));

// [object Number]
console.log(Object.prototype.toString.call(12));

// [object Boolean]
console.log(Object.prototype.toString.call(true));

// [object Undefined]
console.log(Object.prototype.toString.call(undefined));

// [object Null]
console.log(Object.prototype.toString.call(null));

// [object Object]
console.log(Object.prototype.toString.call({name:"tnsihy"}));

// [object Array]
console.log(Object.prototype.toString.call([]));

// [object Function]
console.log(Object.prototype.toString.call(function(){}));

// [object Date]
console.log(Object.prototype.toString.call(new Date)); 

// [object RegExp]
console.log(Object.prototype.toString.call(/\d/));











