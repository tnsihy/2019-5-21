function demo() {
    const arr = [5, 2, 0, 1, 3, 1, 4];
    arr.sort();
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i-1]){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(demo());