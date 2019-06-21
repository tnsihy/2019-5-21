// 确保字符串的每个单词首字母都大写，其余部分小写

function titleCase(str){
    var arr = str.toLowerCase().split(' ');
    for(var i = 0;i<arr.length;i++){
        arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1);
    }
    var oString = arr.join(' ');
    document.write(oString);
}
titleCase("I'm a title Case");