`1.display:block`
- 块级元素
- 前后有换行符
- 能设置宽高
- margin/padding在水平垂直方向都有效

`2.display:inline`
- 行内元素
- 前后无换行符
- 设置宽高无效
- margin在竖直方向上无效 padding在水平垂直方向都有效

`3.display:inline-block`
- 前后无换行符
- 能设置宽高
- margin/padding在水平垂直方向都有效

`4.为什么img是行内元素但是可以设置宽高`  
img确实为行内元素，但同时也是置换元素。  
置换元素是指：浏览器根据元素的标签和属性，来决定元素的具体显示内容。  
可以设置宽高。  
`<img><input><select><textarea>`也为置换元素 