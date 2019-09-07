// 1.indexOf循环去重
function removeRe1() {
    var arr = [1, 3, 4, 5, 6, 7, 4, 3, 2, 4, 5, 6, 7, 3, 2];
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if(newArr.indexOf(arr[i])== -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var one = removeRe1();
console.log(one);

// 2.