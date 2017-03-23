/*
 *	20170322 lcz
 *	jQuery.prototype.each使用的主体是Object,不是Array
 *	判断一个对象的类型有3种方法:
 *		1.typeof   demo: typeof obj
 *		2.instanceof	demo: a instanceof Array
 *		3.constructor	demo: a.constructor == Array
 *
 *
 * 
 */
var arr = [];
$('.transport').each(function() {
    var val = $(this).val();
    if (val == "00008000170000200015000000000000000000000000000000" || val == "00008000170000200001000000000000000000000000000000" || val == "00008000170000200010000000000000000000000000000000" || val == "00008000170000200012000000000000000000000000000000" || val == "00008000170000200014000000000000000000000000000000" || val == "00008000170000200007000000000000000000000000000000" || val == "0") {
        arr.push(true);
    } else {
        arr.push(false);
    }
});
var theFlag = arr.every(function(element, index, array) {
    return element == true;
});
if (theFlag == true) {
    document.getElementById('fCCheckBox').checked = false;
    $('.reasonArea-fC').addClass("uhide");
    document.getElementById('fCCheckBox').disabled = false;
    $('.fCCheckbox').removeClass('disabledStyle');
}

/*
 *	Array.prototype.every/some/map/filter/forEach使用主体是Array,Object不行
 *	
 */

//demo:every	检测数值元素的每个元素是否都符合条件。所有返回true,则返回true

var arr = [];
$('.transport').each(function() {
    var val = $(this).val();
    if (val == "00008000170000200015000000000000000000000000000000" || val == "00008000170000200001000000000000000000000000000000" || val == "00008000170000200010000000000000000000000000000000" || val == "00008000170000200012000000000000000000000000000000" || val == "00008000170000200014000000000000000000000000000000" || val == "00008000170000200007000000000000000000000000000000" || val == "0") {
        arr.push(true);
    } else {
        arr.push(false);
    }
});
var theFlag = arr.every(function(element, index, array) {
    return element == true;
});

//demo:filter	检测数值元素，并返回符合条件所有元素的数组。

var ages = [32, 33, 16, 40];

function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(function checkAdult(age) {
        return age >= 18;
    });
}

//demo:map	通过指定函数处理数组的每个元素，并返回处理后的数组。
var numbers = [4, 9, 16, 25];

function myFunction() {
    document.getElementById("demo").innerHTML = numbers.map(Math.sqrt);
}

//some  检测数组元素中是否有元素符合指定条件,任意一项返回true,则返回true
var ages = [3, 10, 18, 20];

function myFunction() {
    document.getElementById("demo").innerHTML = ages.some(function checkAdult(age) {
        return age >= 18;
    });
}

//forEach 数组每一项都运行给定函数,没有返回值.
