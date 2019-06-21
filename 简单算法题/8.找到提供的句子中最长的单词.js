// 找到提供的句子中最长的单词及长度

function findLength(str) {
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        var length = 0;
        var index = 0;
        if (length < arr[i].length) {
            length = arr[i].length;
            index = i;
        }
    }
    document.write("最长的单词" + arr[index]);
    document.write("长度" + arr[index].length);
}
findLength('I love China');

// 转化成数组
// 根据元素长度排序
// 输出最长元素并返回长度
function findLongestString(str) {
    var arr = str.split(' ');
    var arr1 = arr.sort(function (a, b) {
        return b.length - a.length
    })
    document.write("最长单词：" + arr1[0]);
    document.write("单词长度：" + arr1[0].length);
}
findLongestString('I love China');