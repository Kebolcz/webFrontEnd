# CSS核心技术
- ### 1.浮动float  
> 让原来的元素可以脱离正常的文档流,实现左右排列,不设置宽度最小宽度.  
- ### 2.定位position  
> i.relative  
>>  即使偏移,位置还在.靠本div左上角的位置进行上下左右偏移 

> ii.absolute  
>>  脱离文档流,靠最近的元素是relative/absolute定位的父容器进行相对偏移  

> iii.fixed  
>> ie6不支持,相对于浏览器窗口不动.

* float(文档流向左对齐&&&float也是脱离文档流的)和display:inline-block(该块级元素变成行内布局)  
* relative,没有脱离文档流,在标签设置该属性后,上下左右位置是参照该标签的初始位置进行偏移,位置还在.  
* absolute,脱离文档流,在标签设置该属性后,上下左右位置是参照设置有position的父级元素进行偏移,没有就相对body元素进行偏移.(position默认是static)  
* display:inline-block与position:absolute有相互影响?
- ### 3.行高line-height  
> 行高,值有'normal'|<number>|<length>|<%>
- ### 4.水平居中与垂直居中  
> i. 定位 + margin  
  ii. text-align + vertical-align
- ### 5.滑动门
- ### 6.Html调色原理