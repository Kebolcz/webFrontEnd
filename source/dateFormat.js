/*
 * JS时间格式转换
 */
Date.prototype.format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}


var dateStr = (new Date()).format("yyyy-MM-dd hh:mm:ss");
var dateStr1 = (new Date()).format("MM-dd hh:mm:ss");




/*
 * link==>http://www.cnblogs.com/polk6/p/4156595.html
 * new Date()的get方法
 * ***********************************************************************************************
 * getFullYear() ：返回Date对象的年份值；4位年份。
 * getMonth() ：返回Date对象的月份值。从0开始，所以真实月份=返回值+1 。
 * getDate() ：返回Date对象的月份中的日期值；值的范围1~31 。
 * getHours() ：返回Date对象的小时值。
 * getMinutes() ：返回Date对象的分钟值。
 * getSeconds() ：返回Date对象的秒数值。
 * getMilliseconds() ：返回Date对象的毫秒值。
 * getDay() ：返回Date对象的一周中的星期值；0为星期天，1为星期一、2为星期二，依此类推
 * getTime() ：返回Date对象与'1970/01/01 00:00:00'之间的毫秒值(北京时间的时区为东8区，起点时间实际为：'1970/01/01 08:00:00') 。
 */
var dt = new Date();
dt.getFullYear(); // => 2017：年
dt.getMonth(); // => 03：月；实际为12月份(月份从0开始计算)
dt.getDate(); // => 09：日
dt.getHours(); // => 15：时
dt.getMinutes(); // => 30：分
dt.getSeconds(); // => 40：秒
dt.getMilliseconds(); // => 333：毫秒
dt.getDay(); // => 4：星期几的值
dt.getTime(); // => 1419492640333 ：返回Date对象与'1970/01/01 00:00:00'之间的毫秒值(北京时间的时区为东8区，起点时间实际为：'1970/01/01 08:00:00')


/*
 * new Date()的set方法
 * ***********************************************************************************************
 * setFullYear(year, opt_month, opt_date) ：设置Date对象的年份值；4位年份。
 * setMonth(month, opt_date) ：设置Date对象的月份值。0表示1月，11表示12月。
 * setDate(date) ：设置Date对象的月份中的日期值；值的范围1~31 。
 * setHours(hour, opt_min, opt_sec, opt_msec) ：设置Date对象的小时值。
 * setMinutes(min, opt_sec, opt_msec) ：设置Date对象的分钟值。
 * setSeconds(sec, opt_msec) ：设置Date对象的秒数值。
 * setMilliseconds(msec) ：设置Date对象的毫秒值。
 */

var dt = new Date();
dt.setFullYear(2014); // => 2017：年
dt.setMonth(11); // => 03：月；实际为12月份(月份从0开始计算)
dt.setDate(25); // => 09：日
dt.setHours(15); // => 15：时
dt.setMinutes(30); // => 30：分
dt.setSeconds(40); // => 40：秒
dt.setMilliseconds(333); // => 333：毫秒
console.log(dt); // =>  2014年12月25日 15点30分40秒 333毫秒


/*
 * new Date()的其他方法
 * ***********************************************************************************************
 * toString() ：将Date转换为一个'年月日 时分秒'字符串
 * toLocaleString() ：将Date转换为一个'年月日 时分秒'的本地格式字符串
 * toDateString() ：将Date转换为一个'年月日'字符串
 * toLocaleDateString() ：将Date转换为一个'年月日'的本地格式字符串
 * toTimeString() ：将Date转换为一个'时分秒'字符串
 * toLocaleTimeString() ：将Date转换为一个'时分秒'的本地格式字符串
 * valueOf() ：与getTime()一样， 返回Date对象与'1970/01/01 00:00:00'之间的毫秒值(北京时间的时区为东8区，起点时间实际为：'1970/01/01 08:00:00') 
 */

var dt = new Date();
console.log(dt.toString()); // => Thu Mar 09 2017 22:56:11 GMT+0800 (中国标准时间) ：将Date转换为一个'年月日 时分秒'字符串
console.log(dt.toLocaleString()); // => 2014年12月23日 下午10:56:11  ：将Date转换为一个'年月日 时分秒'的本地格式字符串
 
console.log(dt.toDateString()); // => Thu Mar 09 2017 ：将Date转换为一个'年月日'字符串
console.log(dt.toLocaleDateString()); // => 2014年12月23日 ：将Date转换为一个'年月日'的本地格式字符串
 
console.log(dt.toTimeString()); // => 22:56:11 GMT+0800 (中国标准时间) ：将Date转换为一个'时分秒'字符串
console.log(dt.toLocaleTimeString()); // => 下午10:56:11 ：将Date转换为一个'时分秒'的本地格式字符串
 
console.log(dt.valueOf()); // => 返回Date对象与'1970/01/01 00:00:00'之间的毫秒值(北京时间的时区为东8区，起点时间实际为：'1970/01/01 08:00:00')

/*
 *  比较2个Date对象的大小
 */

var dt1 = new Date('2015/12/01');
var dt2 = new Date('2015/12/25');
console.log(dt1 > dt2); // => false