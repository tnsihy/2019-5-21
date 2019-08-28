`readyState状态介绍`  
- 0(Uninitialized) 未初始化 还没有调用send()方法
- 1(Loading) 载入 调用send()方法，正在发生请求
- 2(Loaded) 载入完成 send()方法执行完成，已经接收全部响应内容
- 3(Interactive) 交互 正在解析响应内容
- 4(Completed) 完成 响应内容解析完成 可以在客户端调用