/**
 * 闭包简单理解成:"定义在一个函数内部的函数"
 *
 * 在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
 *
 * 最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。
 */

function f1() {　　　　
    var n = 999;　　　　
    nAdd = function() { n += 1 }　　　　
    function f2() {　　　　　　 
    	alert(n);　　　　 
    }　　　　
    return f2;　　
}

var result = f1();　　
result(); // 999
　　
nAdd();　　
result(); // 1000
