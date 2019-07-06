/* 
Node.js Buffer 缓冲区
JavaScript语言自身只有字符串数据类型 没有二进制数据类型
处理像TCP流或文件流，必须要用到二进制数据
因此定义了一个Buffer类，该类用来创建一个专门存放二进制数据的缓存区
建议使用Buffer.from()接口去创建Buffer对象
*/

// Buffer与字符编码
const buf = Buffer.from('runboo','ascii');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

// ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
// utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
// utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
// ucs2 - utf16le 的别名。
// base64 - Base64 编码。
// latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。
// binary - latin1 的别名。
// hex - 将每个字节编码为两个十六进制字符。

// 创建Buffer类
// 1.创建一个长度为10 且用0填充的Buffer
const buf1 = Buffer.alloc(10);
// 2.创建一个长度为10，且用0*1填充的Buffer
const buf2 = Buffer.alloc(10,0);
// 3.创建一个长度为10，且未初始化的Buffer 比调用Buffer.allc()更快
const buf3 = Buffer.allocUnsafe(10);
// 4.创建一个包含[0*1,0*2,0*3]的Buffer
const buf4 = Buffer.from([1, 2, 3]);
// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');
// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');

// 写入缓冲区
// buf.write(string[,offset[,length]][,encoding])
var buf7 = Buffer.alloc(256);
var len = buf7.write('www.baidu.com');
console.log('写入字节数' + len);

// 缓冲区读取
//buf.toString([encoding[, start[, end]]])
var buf8 = Buffer.alloc(26);
for(var i = 0;i < 26; i++){
    buf8[i] = i + 97;
}
console.log(buf8.toString('ascii'));
console.log(buf8.toString('ascii',0,5));
console.log(buf8.toString('utf8',0,5));
console.log(buf8.toString(undefined,0,5));

// 将Buffer转换为JSON对象
buf.toJSON()
// 将一个字符化一个Buffer实例，JSON.stringify()会隐式地调用该toJSON()

const buf9 = Buffer.from([1,2,3,4,5]);
const json = JSON.stringify(buf9);
console.log(json); 

/*
JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
JSON.parse(text[, reviver])
text:必需， 一个有效的 JSON 字符串。
reviver: 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。
*/
const copy = JSON.parse(json,(key,value) =>{
    return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
})
console.log(copy);

/* 缓冲区合并
Buffer.concat(list[,totalLength])
list - 用于合并的 Buffer 对象数组列表。
totalLength - 指定合并后Buffer对象的总长度。
*/
var buf10 = Buffer.from('菜鸟教程');
var buf11 = Buffer.from('www.runoob.com');
var buf12 = Buffer.concat([buf10,buf11]);
console.log(buf12.toString());

/* 缓冲区比较
buf.compare(otherBuffer)
*/
var buf13 = Buffer.from('ABC');
var buf14 = Buffer.from('ABCD');
var result = buf13.compare(buf14);
console.log(result);
if(result == 0){
    console.log(buf13 + '与' + buf14 + '相同');
}else if(result < 0){
    console.log(buf13 + '在' + buf14 + '之前');
}else{
    console.log(buf13 + '在' + buf14 + '之后');
}

/* 拷贝缓冲区
buf.copy(targetBuffer[,targetStart[,sourceStart[,sourceEnd]]])
targetBuffer - 要拷贝的 Buffer 对象。
targetStart - 数字, 可选, 默认: 0
sourceStart - 数字, 可选, 默认: 0
sourceEnd - 数字, 可选, 默认: buffer.length
*/
var buf15 = Buffer.from('abcdefghijkl');
var buf16 = Buffer.from('RUNOOB');
// 将buf16插入到buf15指定位置上
buf16.copy(buf15,2);
console.log(buf15.toString());

/* 缓冲区裁剪buf.slice([start[,end]])
start - 数字, 可选, 默认: 0
end - 数字, 可选, 默认: buffer.length
*/
var buf17 = Buffer.from('runoob');
// 剪切缓冲区
var buf18 = buf17.slice(0,2);
console.log(buf18.toString());

/* 缓冲区长度 buf.length
*/
var buf19 = Buffer.from('www.runoob.com');
console.log(buf19.length);
