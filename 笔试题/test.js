var name = 'tnsihy';
function show(){
    console.log(this);
    console.log(this.name);
}

var obj = {
    name : 'jgchenu',
    show:show   // 对show方法进行引用
}

obj.show();