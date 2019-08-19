http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

`Flex布局`  
- 主轴和交叉轴的判定
  - `flex-direction:row;` 那么主轴是水平方向
  - `flex-direction:column;` 那么主轴是垂直方向


- Flex 容器属性
  - 主轴方向：水平（默认）| 水平反向 | 垂直 | 垂直反向
    - `flex-direction:row | row-reverse | column | column-reverse `
  - 换行：不换行（默认）| 换行 | 反向换行（第一行在最后）
    - `flex-wrap:nowrap | wrap | wrap-reverse`
  - `★★★` 缩写 flex-direction属性与flex-wrap属性
    - `flex-flow:<flex-direction> <flex-wrap>`
  - `★` 主轴对齐方式：起点对齐（默认）| 终点对齐 | 居中对齐 | 两端对齐 | 分散对齐
    - `justify-content:flex-start | flex-end | center | space-between | space-around`
  - `★` 交叉轴对齐方式：拉伸对齐（默认）| 起点对齐 | 终点对齐 | 居中对齐 | 第一行文字的基线对齐
    - `align-items:stretch | flex-start | flex-end | center | baseline`
  - 多根轴线对齐方式：拉伸对齐（默认）| 起点对齐 | 终点对齐 | 居中对齐 | 两端对齐 | 分散对齐
    - `align-content:stretch | flex-start | flex-end | center | space-between | space-around`


- Flex 项目属性
  - 顺序：数值越小越靠前，默认为0
    - `order:<number>`
  - 放大比例：默认为0，如果有剩余空间也不放大，值为1则放大，2是1的双倍大小，以此类推。
    - `flex-grow:<number>`
  - 缩小比例：默认为1，如果空间不足则会缩小，值为0不缩小。
    - `flex-shrink:<number>`
  - 项目自身大小：默认auto，为原来大小。可设置固定值50px/50%
    - `flex-basis:<length> | auto`
  - `★★★` 缩写flex-grow属性 flex-shrink属性和flex-basic属性
    - `flex:<flex-grow> <flex-shrink> <flex-basis>`
    - 默认值：`0 1 auto`
  - 项目自身对齐：继承父元素（默认）| 起点对齐 | 终点对齐 | 居中对齐 | 基线对齐 | 拉伸对齐
    - `align-self:auto | flex-start | flex-end | center | baseline | stretch`