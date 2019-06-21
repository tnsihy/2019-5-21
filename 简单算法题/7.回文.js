// 一个字符串如果忽略标点符号、大小写和空格，正着读或者反着读一模一样，该字符串称为空格。

function palindrome(str){
    var str1 = str.replace(/[^0-9a-zA-Z]/g,'').toLowerCase();
    var str2 = str1.split('').reverse().join('');
    if(str1 === str2){
        return true;
    }else{
        return false;
    } //true
}
palindrome("aBc,./1d42--==EFG0   00 h0-';'00gfE';./. 24d 1cBA");



