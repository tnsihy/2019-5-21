// 一个大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。

// 1.使用Math.max.apply()提取最大值
function largestArray(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        // null默认为上文
        result.push(Math.max.apply(null,arr[i]));
    }
    return result;
}
largestArray([[165,2,9], [48,6,9,82],[6,5],[29658,91,2]]); //结果为[165, 82, 6, 29658]

// 2.排序法提取最大法
function largestArray1(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        arr[i].sort(function(a,b){
            return b-a;
        })
        result.push(arr[i][0]);
    }
    return result;
}
largestArray1([[165,2,9], [48,6,9,82],[6,5],[29658,91,2]]);



