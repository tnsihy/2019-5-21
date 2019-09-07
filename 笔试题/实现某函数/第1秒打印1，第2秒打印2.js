var start = 0;
var end = 5;

function demo() {
    start++;
    if (start < end) {
        setTimeout(() => {
            console.log(start,new Date().toString());
            demo();
        }, 1000);
    }
}
demo();