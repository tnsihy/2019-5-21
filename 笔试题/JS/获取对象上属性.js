var obj = {
    name:"tnsihy",
    age:20,
    job:"student"
}

for(let i in obj){
    console.log(i);
}
// 输出结果为： 
// name 
// age 
// job

Object.keys(obj);
// 返回一个数组，包括所有可枚举的属性名称 ["name", "age", "job"]

Object.getOwnPropertyNames(obj);
// 返回一个数组，包含不可枚举的属性 ["name", "age", "job"]