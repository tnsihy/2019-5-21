`1.固定定位fixed`
- 元素位置相对于浏览器窗口是固定位置
- 脱离文档流，不占据空间

`2.相对定位relative`
- 出现在所在的位置
- 占据空间
  
`3.绝对定位absolute`
- 相对于最近的已定位的父元素，如果没有则相对于`<html>`
- 脱离文档流，不占据空间

`4.粘性定位sticky`
- CSS3新增
- 元素定位表现为：在跨越特定阈值前为相对定位，之后为固定定位

`5.默认定位static`
- 忽略`top bottom left right和z-index`  

`6.inherit`
- 从父元素继承position属性值
