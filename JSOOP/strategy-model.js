/**
 * 策略模式--->>>DEMO
 */
var strategies = {
    "S": function (salary) {
        return salary * 4;
    },
    "A": function (salary) {
        return salary * 3;
    },
    "B": function (salary) {
        return salary * 2;
    }
};

var calculateBonus = function (level, salary) {
    return strategies[level](salary);
}

console.log(calculateBonus('S', 20000));

console.log(calculateBonus('A', 15000));


/*********************************************************/
/***策略模式应用***/
/*********************************************************/

/**
 * 策略模式应用--->>>表单验证 DIFF WITH decorate model 表单验证
 */
var strategies = {
    isNonEmpty: function (value, errorMsg) {
        if (value === '') {
            return errorMsg;
        }
    },
    minLength: function (value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg;
        }
    },
    isMobile: function (value, errorMsg) {
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            return errorMsg;
        }
    }
};

var Validator = function () {
    this.cache = [];
};

Validator.prototype.add = function (dom, rule, errorMsg) {
    var ary = rule.split(':');
    this.cache.push(
        function () {
            var strategy = ary.shift();
            ary.unshift(dom.value);
            ary.push(errorMsg);
            return strategies[strategy].apply(dom, ary);
        }
    );
};

Validator.prototype.start = function () {
    for (let i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
        var msg = validatorFunc();
        if (msg) {
            return msg;
        }
    }
};

var validatorFunc = function () {
    var validator = new Validator();

    validator.add(registerForm.userName, 'isNonEmpty', '用户名不能为空');
    validator.add(registerForm.password, 'minLength: 6', '密码长度不能小于6位');
    validator.add(registerForm.phoneNumber, 'isMobile', '手机号码格式不正确');

    var errorMsg = validator.start();
    return errorMsg;
};

var registerForm = document.getElementById('registerForm');

registerForm.onsubmit = function () {
    var errorMsg = validatorFunc();
    if (errorMsg) {
        alert(errorMsg);
        return false;
    }
};