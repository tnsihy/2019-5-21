// 求1+2+3+...+100的和

function Sum() {
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
        sum += i;
    }
    document.write(sum);
}
Sum();