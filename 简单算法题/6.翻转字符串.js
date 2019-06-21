// 将字符串翻转

// split()字符串转成数组
// reverse()翻转数组
// join()数组转化为字符串


function reverseString(str){
    var str = str.split('').reverse().join('');
    document.write(str);
}
reverseString('Hello world!');


function reverseString1(){
    var str = 'Hello world!';
    var str1 = str.split('').reverse().join('');
    document.write(str1);
}
reverseString1();