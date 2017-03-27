/*********************************************************/
            /***事件委托进行绑定事件方法1***/
/*用事件委托就可以只用一次dom操作就能完成所有的item绑定事件*/
  /*URL:http://www.cnblogs.com/liugang-vip/p/5616484.html*/
/*********************************************************/
// window.onload = function() {
//     //屏幕物理像素
//     var screenWidth = document.documentElement.clientWidth;
//     //加载后根据屏幕物理像素设置font-size,使1rem等于屏幕宽度的1/30
//     var scale = 30;
//     $("html").css("font-size", screenWidth / scale + "px");
//     var dTable = document.getElementById('table');

//     dTable.onclick = function(ev) {
//         if (ev.target && ev.target.nodeName.toLocaleLowerCase() === 'input') {
//             switch (ev.target.classList[1]) {
//                 case 'show':
//                     alert('show');
//                     break;
//             }
//         }
//     };
// };
/*********************************************************/
            /***事件委托进行绑定事件方法2***/
/*********************************************************/
// document.addEventListener('DOMContentLoaded', function() {
//     //屏幕物理像素
//     var screenWidth = document.documentElement.clientWidth;
//     //加载后根据屏幕物理像素设置font-size,使1rem等于屏幕宽度的1/30
//     var scale = 30;
//     $("html").css("font-size", screenWidth / scale + "px");

//     let app = document.getElementById('table');

//     // 事件侦听器绑定到整个容器上
//     app.addEventListener('click', function(e) {
//         if (e.target && e.target.nodeName === 'INPUT') {
//             switch (e.target.classList[1]) {
//                 case 'show':
//                     alert('show');
//                     break;
//             }
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {

    //屏幕物理像素
    var screenWidth = document.documentElement.clientWidth;
    //加载后根据屏幕物理像素设置font-size,使1rem等于屏幕宽度的1/30
    var scale = 30;
    $("html").css("font-size", screenWidth / scale + "px");

    //运算func
    /*
     * js浮点数的运算func
     */
    //浮点数相加
    function accAdd(arg1, arg2) {
        var r1, r2, m;
        try {
            r1 = arg1.toString().split(".")[1].length
        } catch (e) {
            r1 = 0
        }
        try {
            r2 = arg2.toString().split(".")[1].length
        } catch (e) {
            r2 = 0
        }
        m = Math.pow(10, Math.max(r1, r2))
        return (arg1 * m + arg2 * m) / m
    }

    Number.prototype.add = function(arg) {
        return accAdd(this, arg);
    }

    //浮点数相减
    function accMinus(arg1, arg2) {
        var r1, r2, m;
        try {
            r1 = arg1.toString().split(".")[1].length
        } catch (e) {
            r1 = 0
        }
        try {
            r2 = arg2.toString().split(".")[1].length
        } catch (e) {
            r2 = 0
        }
        m = Math.pow(10, Math.max(r1, r2))
        return (arg1 * m - arg2 * m) / m
    }

    Number.prototype.minus = function(arg) {
        return accMinus(this, arg);
    }

    //浮点数相乘
    function accMul(arg1, arg2) {
        var m = 0,
            s1 = arg1.toString(),
            s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length
        } catch (e) {}
        try {
            m += s2.split(".")[1].length
        } catch (e) {}
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
    }

    Number.prototype.mul = function(arg) {
        return accMul(this, arg);
    }

    //浮点数相除
    function accDiv(arg1, arg2) {
        var t1 = 0,
            t2 = 0,
            r1, r2;
        if(arg2===0){
            return false;
        }
        try {
            t1 = arg1.toString().split(".")[1].length
        } catch (e) {}
        try {
            t2 = arg2.toString().split(".")[1].length
        } catch (e) {}
        with(Math) {
            r1 = Number(arg1.toString().replace(".", ""))
            r2 = Number(arg2.toString().replace(".", ""))
            return (r1 / r2).toFixed(10) * pow(10, t2 - t1);
        }
    }

    Number.prototype.div = function(arg) {
        return accDiv(this, arg);
    }


    function operator(argA, oper, argB) {
        switch (oper) {
            case '+':
                document.getElementById("text").value = Number(argA).add(Number(argB));
                break;
            case '-':
                document.getElementById("text").value = Number(argA).minus(Number(argB));
                break;
            case 'X':
                document.getElementById("text").value = Number(argA).mul(Number(argB));
                break;
            case '÷':
                document.getElementById("text").value = Number(argA).div(Number(argB));
                break;
        }
        window.argA = document.getElementById("text").value;
        window.isGoOn = true;
    }





    //FLAG:输入符号了,接下来下次输入,前面的输入重置为空
    var isOper = false;
    //FLAG:是否连续计算
    window.isGoOn = false;
    //参数args
    window.argA = 0;
    window.argB = 0;
    //运算符
    var oper = "";

    let app = document.getElementById('table');

    // 事件侦听器绑定到整个容器上
    app.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === 'INPUT') {
            var data = e.target.value;
            var text = document.getElementById("text");
            switch (e.target.classList[1]) {
                case 'show':
                    if (data == "0" && text.value == "0") {
                        text.value = parseInt(text.value) + 0;
                    } else if (text.value == "0" && data != "+" && data != "-" && data != "X" && data != "÷") {
                        text.value = parseInt(text.value) + parseInt(data);
                    } else {
                        if (isOper) {
                            window.argA = text.value;
                            text.value = "";
                        }
                        isOper = false;
                        text.value += data;
                    }
                    break;
                case 'clear':
                    document.getElementById("text").value = "0";
                    window.argA = 0;
                    window.argB = 0;
                    oper = "";
                    //noPoint = true;
                    isGoOn = false;
                    break;
                case 'point':
                    var p = document.getElementById("dot");
                    var pointIndex = document.getElementById("text").value.indexOf('.');
                    if (pointIndex < 0 && !window.isGoOn) {
                        text.value += p.value;
                        //noPoint = false;
                    }
                    if (window.isGoOn) {
                        text.value = '0.';
                        //noPoint = false;
                    }
                    break;
                case 'oper':
                    if (data == "+" || data == "-" || data == "X" || data == "÷") {
                        if(window.argA!=0&&window.argB==0){
                            operator(window.argA, oper, text.value);
                        }
                        window.argA = text.value;
                        window.argB = 0;
                        isOper = true;
                    }
                    //window.isGoOn = false;
                    oper = data;
                    break;
                case 'res':
                    // if (!window.isGoOn) {
                    window.argB = text.value;
                    // }
                    if (oper != "") {
                        operator(window.argA, oper, window.argB);
                        // window.argB = 0;
                    }
                    break;
                case 'del':
                    var text = document.getElementById("text");
                    if (text.value == "0" || text.value == "") {
                        text.value = "0";
                    } else {
                        document.getElementById("text").value = document.getElementById("text").value.slice(0, -1);
                    }
                    window.argA = document.getElementById("text").value;
                    window.argB = 0;
                    break;
                case 'pm':
                    document.getElementById("text").value = Number(document.getElementById("text").value)*(-1);
                    window.argA = document.getElementById("text").value;
                    break;
                case 'rec':
                    operator(1, '÷', document.getElementById("text").value);
                    window.argB = "";
                    break;
                case 'percent':
                    operator(document.getElementById("text").value, '÷', 100);
                    window.argB = "";
                    break;
                case 'rad':
                    document.getElementById("text").value = Math.sqrt(Number(document.getElementById("text").value));
                    window.argB = "";
                    break;
            }
        }
    });

});
