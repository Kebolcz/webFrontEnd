/*
 * js浮点数的运算func
 */
//浮点数相加
function accAdd(arg1, arg2) {
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
}

Number.prototype.add = function(arg) {
    return accAdd(this, arg);
}

//浮点数相减
function accMinus(arg1, arg2) {
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
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
    try { m += s1.split(".")[1].length } catch (e) {}
    try { m += s2.split(".")[1].length } catch (e) {}
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
    try { t1 = arg1.toString().split(".")[1].length } catch (e) {}
    try { t2 = arg2.toString().split(".")[1].length } catch (e) {}
    with(Math) {
        r1 = Number(arg1.toString().replace(".", ""))
        r2 = Number(arg2.toString().replace(".", ""))
        return (r1 / r2) * pow(10, t2 - t1);
    }
}

Number.prototype.div = function(arg) {
    return accDiv(this, arg);
}

//显示计算算式的func
function display() {
    var str = "";
    str += $("#inputX").val();
    switch (Number($("#opera").val())) {
        case 1:
            str += " + ";
            break;
        case 2:
            str += " - ";
            break;
        case 3:
            str += " * ";
            break;
        case 4:
            str += " / ";
            break;
    }
    str += $("#inputY").val();
    $("#monitor").val(str);
}

$("#inputX").keyup(function() {
    if (isNaN($("#inputX").val())) {
        alert("请输入有效数字!");
        $("#inputX").val("");
    }
    display();
});

$("#inputY").keyup(function(e) {
    if (isNaN($("#inputX").val())) {
        alert("请输入有效数字!");
        $("#inputX").val("");
    }
    if ($("#opera").val() == "4" && $("#inputY").val() == "0") {
        alert("被除数不能为0");
        $("#inputY").val("");
        return false;
    }
    display();
});

$("#opera").change(function(e) {
    display();
});

$("#doit").click(function() {
    var str = "";
    var X = Number($("#inputX").val());
    var Y = Number($("#inputY").val());
    switch (Number($("#opera").val())) {
        case 1:
            str += $("#inputX").val() + " + " + $("#inputY").val() + " = " + X.add(Y);
            break;
        case 2:
            str += $("#inputX").val() + " - " + $("#inputY").val() + " = " + X.minus(Y);
            break;
        case 3:
            str += $("#inputX").val() + " * " + $("#inputY").val() + " = " + X.mul(Y);
            break;
        case 4:
            str += $("#inputX").val() + " / " + $("#inputY").val() + " = " + X.div(Y);
            break;
    }
    $("#monitor").val(str);
});
