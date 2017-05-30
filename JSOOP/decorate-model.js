/**
 * 装饰者模式
 */

/*********************************************************/
/***通过保存原引用的方式***/
/*********************************************************/
var a = function () {
    alert(1);
}
var _a = a;

a = function () {
    _a();
    alert(2);
}

a();

/*********************************************************/
/***通过AOP装饰函数***/
/*********************************************************/
Function.prototype.before = function (beforeFn) {
    var _self = this;
    return function () {
        beforeFn.apply(this, arguments);
        return _self.apply(this, arguments);
    }
};

Function.prototype.after = function (afterFn) {
    var _self = this;
    return function () {
        var ret = _self.apply(this, arguments);
        afterFn.apply(this, arguments);
        return ret;
    }
};

/**
 * AOP装饰者模式的应用实例
 * 1.动态改变函数的参数--->>>为封装好的Ajax请求,增加Token参数
 * 2.插件式的表单验证   DIFF WITH strategy model 表单验证
 */

/*********************************************************/
/***装饰模式----插件式的表单验证***/
/*********************************************************/
Function.prototype.before = function (beforeFn) {
    var _self = this;
    return function () {
        if (beforeFn.apply(this, arguments) === false) {
            return;
        }
        return _self.apply(this, arguments);
    }
};

var validata = function () {
    if (username.value === '') {
        alert('用户名不能为空');
        return false;
    }
    if (!/(^1[3|5|8][0-9]{9}$)/.test(photoNumber.value)) {
        alert('手机号码格式不正确');
        return false;
    }
};

var formSubmit = function () {
    var param = {
        username: username.value,
        photoNumber: photoNumber.value
    }
    ajax('http://xxx.com/login', param);
};

formSubmit = formSubmit.before(validata);

submitBtn.onclick = function () {
    formSubmit();
};