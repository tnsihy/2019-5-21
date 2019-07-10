// 如果1分钟以内，显示刚刚；如果小于1小时，显示多少分钟前；
//如果小于1天，显示多少小时前；如果小于1个月（30天），显示多少天前；如果大于一个月，显示日期字符串，"2019/03/20"
function format(time){
    let date=new Date(time);
    let timeStamp=Math.floor(Date.now()/1000)-Math.floor(date.getTime()/1000);
    let minute=60;
    let h=60*minute;
    let day=24*h;;
    let month=30*day;
    if(timeStamp<minute){
        return '刚刚';
    }else if(timeStamp<h){
        return `${Math.floor(timeStamp/minute)}分钟前`;
    }else if(timeStamp<day){
        return `${Math.floor(timeStamp/h)}小时前`;
    }else if(timeStamp<month){
        return `${Math.floor(timeStamp/day)}天前`;
    } 
    return `${date.getFullYear()}/${addZero(date.getMonth()+1)}/${date.getDate()}`;
    //date.getDay()是获取星期几，date.getDate()
}
function addZero(number){
    return number<10?`0${number}`:number;
}
