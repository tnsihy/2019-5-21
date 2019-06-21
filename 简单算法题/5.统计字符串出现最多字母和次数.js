// 统计字符串出现最多的字母和出现的次数

function sumMul() {
    var str = 'aaaabbbbccccccccdee';
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);  // 代表字符串中字母
        if (obj[char]) {
            obj[char]++; // 计算出现的次数
        } else {
            obj[char] = 1; // 第一次出现标记为1
        }
    }
    var max = 0;
    var maxChar = null;
    for (var key in obj) {
        if (max < obj[key]) {
            max = obj[key]
            maxChar = key;
        }
    }
    document.write('出现最多的字母：' + maxChar);
    document.write('出现次数' + max);
}
sumMul();