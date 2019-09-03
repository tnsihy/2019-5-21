> `setTimeout`  

超时调用
```
setTimeout(function(){
    alert('Hello world!');
},2000);
```
调用setTimeout()后，该方法会返回一个数值ID，表示超时调用。通过这个ID来取消超时调用。取消超时调用使用方法`clearTimeout()`;

> `setInterval`  

间歇调用  
```
var num = 0,
max = 10,
intervalId = null;

function incremenetNumber(){
    num ++;
    if(num == max){
        clearInterval(intervalId);
        alert('Done');
    }
}
intervalId = setInterval(incrementNumber,500);
```

用超时调用来模拟间歇调用
```
var num = 0;
var max = 10;
function incrementNumber(){
    num ++;
    if(num < max){
        setTimeout(incrementNumber,500);
    }else{
        console.log('Done');
    }
}
setTimeout(incrementNumber,500);
```

#### 在web应用中，实现效果的方式：
#### javaScript使用setTimeout来实现；
#### CSS3使用transition和animation来实现；
#### HTML5使用canvas还有requestAnimationFrame来实现。
> `requestAnimationFrame`  

采用的是系统时间间隔（约16.7ms），保持最佳绘制效果与效率，使各种网页动画有一个统一的刷新机制。
```
var progress = 0;

// 回调函数
function render(){
    progress += 1; // 修改图像的位置
}

if(progress < 100){
    // 在动画没有结束前，递归渲染
    window.requestAnimationFrame(render);
}

// 第一帧渲染
window.requestAnimationFrame(render);
```
setTimeout 其实就是通过设置一个间隔时间来不断的改变图像的位置，从而达到动画效果的。  
利用seTimeout实现的动画在某些低端机上会出现卡顿、抖动的现象。   
这种现象的产生有两个原因：  
- setTimeout的执行时间并不是确定的。在Javascript中， setTimeout 任务被放进了异步队列中，只有当主线程上的任务执行完以后，才会去检查该队列里的任务是否需要开始执行，因此 setTimeout 的实际执行时间一般要比其设定的时间晚一些。
- 刷新频率受屏幕分辨率和屏幕尺寸的影响，因此不同设备的屏幕刷新频率可能会不同，而 setTimeout只能设置一个固定的时间间隔，这个时间不一定和屏幕的刷新时间相同。