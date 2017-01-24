\## H5改良的input元素和CSS基础及选择器  
- ## 1.H5改良的input元素 ###  
> H5在各浏览器中支持效果不一样,只能选择能用的用.
```
<form id="form1">
    <input type="text" />&ndash;&gt;
    <input type="email" />
    <input type="tel" />
    <input type="url" />
    <input type="color" />
    <input type="date" />
    <input type="datetime" />
    <input type="datetime-local" />
    <input type="number" required autofocus autocomplete="on" min="100" max="105" />
    <input type="range" />
    <input type="search" />
    <input type="submit" value="提交" />
</form>
```
    
- ## 2.CSS基础  ###  
- #### 2.1历史版本
> i.    css雏形  
  ii:   css1  
  iii:  css1.2  
  iv:   css2  
  v:    css3  
  vi:   css4  
- #### 2.2格式
> i:    行内样式  
`<table style="font-size:12px">`  
> ii:   内部样式  
`<style type="text/css">html{color:#fff}</style>`  
> iii:  外部样式  
`<link rel="stylesheet" type="text/css" href="./formStyle" />`  
>iv:    导入样式(在ccs中引入其他css)  
`@impotr url("/css/global.css")`
- ## 3.CSS选择器 ###  
- #### 3.1类型
> i:    标签选择器  
>> `规则{属性:值}`  

> ii:   类选择器  
>> `.<class>{属性:值}`  

> iii.  id选择器  
>> `#<id>{属性:值}`  

> iv.   后代继承选择器(空格分开)  
>> `.<class> <index>{属性:值}`  

> v.    群选择器(,隔开)  
>> `.<class> <index>,<index>,...{属性:值}`   
---
>>> 注意`<index>.<class>`这种中间没有空格的,效果是index标签中属性是<clss>的index标签起作用.
---
> vi:   属性选择器
>> `input[type="text"] {属性:值}`  

> vii: 伪类选择器  
```
a:link{color:#ff0000;}/*未访问*/
a:visited{color:#00ff00;}/*已访问*/
a:hover{color:#ff00ff;}/*鼠标滑过*/
a:active{color:#0000ff}/*已选中*/
a::before{content:'\f04';color:red}
a::after{content:'hello';color:green}
```

- #### 3.2CSS选择器优先级计算  
> `!important > 内联(style="color:#fff") > ID > 类 > 标签|伪类|属性选择 > 伪对象 > 继承 > 通配符 > 继承`