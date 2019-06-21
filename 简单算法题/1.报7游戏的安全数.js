// 轮流报数，如果报到被7整除的数字，或者尾数为7时，就算踩地雷。
// 在控制台输出1-60之间的所有安全数。

//判断能否被7整除 
function devSeven(i) {
    if (i % 7 === 0) {
        return true;
    }
    return false;
}

// 判断尾数为7

function endSeven(i) {
    var n = i + '';
    if (n.split('')[n.length - 1] === '7') {
        return true;
    }
    return false;
}

for (var i = 1; i <= 60; i++) {
    if (devSeven(i) || endSeven(i)) {
        document.write(i);
    }
}