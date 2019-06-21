function endSeven(i){
    var n = i +'';
    console.log(n.length);
    if(n.split('')[n.length-1] == '7'){
        return true;
    }
    return false;
}
endSeven(67)