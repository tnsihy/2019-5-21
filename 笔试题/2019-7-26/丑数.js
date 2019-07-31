/**
 * 请求出第20个丑数。
 * （最小因子只有2、3、5的数，称作丑数（Ugly Number）。
 * 例如6、8都是丑数，但14不是，因为它包含因子7，习惯上我们把1当做是第一个丑数）；
 * 输入：getUglyNumber(20)
 * 输出：36
 */

function getUglyNumber(n) {
    if (n >= 1) {
        // temp[]用来存放   
        // 最终结果为[ 1,2,3,4,5,6,6,8,9,10,10,12,12,12,15,15,16,18,18,18,20,20,20,24,24,24,24,25,27,30,30,30,30,30,30,32,36 ]
        
        // result[]用来存放20个丑数  去重后
        // 最终结果为[ 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25, 27, 30, 32, 36 ]
        const temp = [1],
            result = [1];
        // 将i设为1，是因为第一个丑数为1，即temp[0] = 1，所以从1开始
        let i = 1,
            index2 = 0,
            index3 = 0,
            index5 = 0;
        
        while(result.length < n){
            temp[i] = Math.min(temp[index2]*2,temp[index3]*3,temp[index5]*5);
            if(temp[i] === temp[index2]*2){
                index2++;
            }else if(temp[i] === temp[index3]*3){
                index3++;
            }else if(temp[i] === temp[index5]*5){
                index5++;
            }
            if(result.indexOf(temp[i]) === -1){
                result.push(temp[i]);
            }
            i++;
        }
        console.log(result[n-1]);
    }
}

getUglyNumber(20);