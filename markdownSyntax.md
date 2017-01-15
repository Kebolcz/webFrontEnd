- # 1.区块元素 #
---
- ## 1.1.段落和换行 ##
> 标题demo  

# 这是 H1 #

## 这是 H2 ##

### 这是 H3 ######
---

- ## 1.2.区块引用 Blockquotes
- demo1
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
- demo2
> ## 这是一个标题。 ##
> 
> 1.   这是第一行列表项。
> 2.   这是第二行列表项。
> 
> 给出一些例子代码：
> 
>     return shell_exec("echo $input | $markdown_script");
---
- ## 1.3.列表(有序&无序) ##
- 无序demo
*   Red
*   Green
*   Blue
- 有序demo
1.  Bird
2.  McHale
3.  Parish
***
- ## 1.4.代码区块 ##
> 只要简单地缩进 4 个空格或是 1 个制表符就可以

这是一个普通段落：

    这是一个代码区块。
---
- ## 1.5.分割线 ##
> 你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：
---
- # 2.区段元素 #
---
- ## 2.1.链接 ##
> 链接文字都是用 [方括号] 来标记,只要在方块括号后面紧接着圆括号并插入网址链接即可.
- demo1

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

---
- ## 2.2.强调 ##
> Markdown 使用星号（*）和底线（_）作为标记强调字词的符号
- demo

*single asterisks*

_single underscores_

**double asterisks**

__double underscores__

---
- ## 2.3.代码块 ##
> 如果要标记一小段行内代码，你可以用反引号把它包起来（`）
- demo1

Use the `printf()` function.

`&#8212;` is the decimal-encoded equivalent of `&mdash;`.
