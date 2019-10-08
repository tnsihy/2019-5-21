/**
 * 首先你得知道是不是闰年，也就是一年是365还是366。
 * 其次你得知道当年1月1号是周几。假如是周五，一年365天把1号 2号3号减去，也就是把第一个不到一周的天数减去等于362，
 * 还得知道最后一天是周几，假如是周五，需要把周一到周五减去，也就是362-5=357。
 * 正常情况 357这个数计算出来是7的倍数。357/7=51 。即为周数。
 */

// 判断是否是闰年
// 闰年的精确计算方法：四年一闰，百年不闰，四百年再闰
function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        // 闰年
        console.log(year + "是闰年");
        return true;
    } else {
        console.log(year + "不是闰年");
        return false;
    }
}

// 判断某年某月某日是星期几
// getDay() 方法可返回表示星期的某一天的数字 例如周日返回0
function getDate(date) {
    let oDate = new Date(date);
    let day = oDate.getDay();
    switch (day) {
        case 0:
            console.log("周日");
            return 0;
        case 1:
            console.log("周一");
            return 1;
        case 2:
            console.log("周二");
            return 2;
        case 3:
            console.log("周三");
            return 3;
        case 4:
            console.log("周四");
            return 4;
        case 5:
            console.log("周五");
            return 5;
        case 6:
            console.log("周六");
            return 6;
    }
}

function main() {
    let currentYearDays = isLeapYear(2019) ? 366 : 365;
    // 若把周日当做一周第一天 beforeDays和afterDays表示前后要去掉的天数
    let beforeDays = 7 - getDate("2019/01/01");
    let afterDays = getDate("2019-12-31") + 1;
    let validDays = currentYearDays - beforeDays - afterDays;
    let weekNumber = validDays / 7;
    console.log(weekNumber);
};

main();