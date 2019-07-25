function sort(){
    var arr = [1,5,5,2,6,3];
    arr.sort();
    arr.reverse();
    var result = arr.join('');
    console.log(result);
}
sort();