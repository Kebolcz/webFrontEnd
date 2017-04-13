- # 盒子模型  
- ### 1.盒模型  
> 1.1标准盒模型  
>> 外层盒子和内里填充宽高相同,剩下的padding和border自己适应,外层盒子会被撑开.  
###### 即:标准盒模型,先处理content填充,再适配外层盒子.

>  1.2怪异盒模型  
>>  使用`box-sizing:border-box`,外层盒模型的宽高需要考虑padding和border的宽.  
###### 即:怪异盒模型,先做盒子,不管content填充.  

---

- ### 2.弹性盒模型  
> 2.1 CSS3多列  
>> Multi-column  
```
column-count:4;
column-rule-style:dotted;
```  
> 2.2 居中 __-box-__ (伸缩盒旧)  
```
display:-webkit-box;
-webkit-box-pack:center;
-webkit-box-align:center;
```  
> 2.3 弹性盒 __-flex-__ (新)  
```
display: -webkit-flex;
-webkit-justify-content: center;
-webkit-align-items: center;  
```
