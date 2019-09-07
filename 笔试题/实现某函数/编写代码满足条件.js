/**
 * 编写代码，满足以下条件：
 * (1)Hero("37er");执行结果为
 *     Hi!This is 37er
 * (2)Hero("37er").kill(1).recover(30);执行结果为
 *     Hi!This is 37er
 *     Kill 1 bug
 *     Recover 30 bloods
 * (3)Hero("37er").sleep(10).kill(2);执行结果为
 *     Hi!This is 37er
 *     // 等待10s后
 *     Kill 2 bugs(注意为bugs)
 */
function Hero(name) {
    var o = new Object();
    o.name = name;
    o.time = 0;
    console.log("Hi,This is" + o.name);

    o.kill = function (num) {
        if (num == 1) {
            console.log("Kill" + num + "bug");
        } else {
            setTimeout(function () {
                console.log("Kill" + num + "bugs");
            }, 1000 * time);
        }
        return o;
    }

    o.sleep = function (sleepTime) {
        o.time = sleepTime;
        return o;
    }

    o.recover = function (bloods) {
        console.log("Recover" + bloods + "bloods");
    }
    return o;
}