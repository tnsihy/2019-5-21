var expression = /pattern(模式)/flag(标志);

// 匹配字符串中所有“at”的实例 字面量形式来定义
var pattern1 = /at/g;
// 使用RegExp构造函数来定义
var pattern2 = new RegExp('at','g');

for(i = 0; i < 10; i++){
    re = /cat/g; // 只为/cat/创建了一个RegExp实例，由于实例属性不会重置，所以在循环中再次调用test()方法会失败，是因为第二次调用是从索引3的字符开始的，由于会测试到字符串末尾，故下一次test()又重头开始。
    // test()用于检测一个字符串是否匹配某个模式
    re.test('catastrophe'); 
}

for(i = 0; i < 10; i++){
    re = new RegExp('cat','g'); // 每次循环都会重新创建正则表达式，每次调用都返回true
    // test()用于检测一个字符串是否匹配某个模式
    re.test('catastrophe'); 
}

// RegExp实例方法 exec()接收一个参数，即要应用模式的字符串，返回数组 数组包含由两个额外的属性index和input 
// index表示匹配项在字符串中的位置
// input表示应用正则表达式的字符串
var text = 'mom and dad and baby';
var pattern3 = /mom ( and dad ( and baby )? )?/gi;
var matches = patten3.exec(text);
matches.index  // 0
matches.input // 'mom and dad and baby'