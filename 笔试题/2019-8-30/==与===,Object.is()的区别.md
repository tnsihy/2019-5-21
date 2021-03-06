> == 与 === 的区别  

== 两边值类型不同的时候，要先进行类型转换，再比较。如果两边值类型相同时不转换直接用 === 比较。  
=== 不做类型转换，类型不同一定不等。  

> 详细说一下 ==  
- 如果两个值类型相同，进行 === 比较。 
- 如果两个值类型不同，他们可能相等。根据下面规则进行类型转换再比较： 
  - 如果一个是null、一个是undefined，那么[相等]。 
  - 如果一个是字符串，一个是数值，把`字符串转换成数值`再进行比较。 
  - 如果任一值是 true，把它转换成 1 再比较；如果任一值是 false，把它转换成 0 再比较。 
  - 如果一个是对象，另一个是数值或字符串，把对象转换成基础类型的值再比较。对象转换成基础类型，利用它的`toString或者valueOf方法`。js核心内置类，会尝试valueOf先于toString；例外的是Date，Date利用的是toString转换。
- 任何其他组合，都[不相等]。 

> `Object.is(value1,value2);`  

`Object.is()` 方法判断两个值是否是相同的值。  
value1第一个需要比较的值；value2第二个需要比较的值。  
`返回值`：表示两个参数是否相同的布尔值。  
 ★★ 如果下列任何一项成立，则两个值相同：
- 两个值都是undefined
- 两个值都是null
- 两个值都是true或者都是false
- 两个值由相同个数的字符按照相同顺序组成的字符串
- 两个值指向同一个对象
- 两个值都是数字并且
  - `都是正零 +0`
  - `都是负零 -0`
  - `都是NaN`
  - 都是除零和NaN之外的其他同一个数字