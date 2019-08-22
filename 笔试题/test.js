function arrFunc() {
    var arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = function () {
            return i;
        };
    }
    return arr;
}
arrFunc();
arrFunc().map(item=>item());