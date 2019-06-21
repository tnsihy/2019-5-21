// 字符串去重

function removeRe() {
    var str = 'aaabccdeeeeeeff';
    var str1 = str.split('');
    // console.log(str1 instanceof Array); true
    var newStr = '';
    for (var i = 0; i < str1.length; i++) {
        if (newStr.indexOf(str1[i]) == -1) {
            newStr += str1[i];
        }
    }
    document.write(newStr);
}
removeRe();
