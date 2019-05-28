// 可以写多个export方法
export var a = 'tnsihy';
export var b = 'jgchen';
export var c = 'web技术';
// 多变量输出
export {nameDemo,Boy,skill};

export function add(a,b){
    return a + b;
}

export {
    // 语义化
    nameDemo as a,
    Boy as b,
    skill as c,
}

export default var a ='jspang'

