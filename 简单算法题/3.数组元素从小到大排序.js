// 数组元素从小到大排序

// 冒泡排序法
// 1.比较相邻的两个元素，如果前一个比后一个大，则交换位置。
// 2.第一轮的时候最后一个元素是最大的一个。
// 3.按照步骤1的方法进行相邻两个元素比较，由于最后一个元素最大，则最后一个元素不用再比较。

function sortArr1() {
    var arr = [10, 20, 5, 8, 21, 100, 99];
    for (var i = 0; i < arr.length; i++) {
        for (var k = 0; k < arr.length - 1 - i; k++) {
            if (arr[k] > arr[k + 1]) {
                var temp = arr[k + 1];
                arr[k + 1] = arr[k];
                arr[k] = temp;
            }
        }
    }
    document.write(arr);
}
sortArr();

// 2.sort排序
function sortArr2() {
    var arr = [10, 20, 5, 8, 21, 100, 99];
    arr.sort(function (num1, num2) {
        return num1 - num2;
    })
    document.write(arr);
}
sortArr2();