/**
 * 【单例模式的核心是】------>确保只有一个实例,并提供全局访问.
 */

/*********************************************************/
            /***全局变量,命名空间污染问题***/
/*********************************************************/
//1.1使用命名空间--对象字面量方式
var namespace1 = {
    a: function () {
        alert(1);
    },
    b: function () {
        alert(2);
    }
};

//1.2使用命名空间--动态创建命名空间
var rootNameSpace = {};

rootNameSpace.namespace = function (name) {
    var parts = name.split('.');
    var current = rootNameSpace;
    for (var i in parts) {
        if (!current[parts[i]]) {
            current[parts[i]] = {};
        }
        //这里地方这么写,是因为namespace的定义是层层上下级嵌套的
        current = current[parts[i]];
    }
};


rootNameSpace.namespace('event');
rootNameSpace.namespace('dom.style');

console.dir(rootNameSpace);

//上述代码相当于申明字面量:
var rootNameSpace = {
    event: {},
    dom: {
        style: {}
    }
};


//2.1使用闭包封装私有变量
var user = (function () {
    var _name = 'sven',
        _age = 27;

    return {
        getuserInfo: function () {
            return _name + '-' + _age;
        }
    }
})();



/*********************************************************/
                    /***惰性单例***/
/*********************************************************/
/**
 * instance的实例对象总是在我们调用Singletom.getInstance的时候才被创建,而不是在页面加载的时候就创建!
 */

//管理单例的代码(这是不变的)抽取出来
var getSingle = function (fn) {
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
};

var createLoginLayer = function () {
    var div = document.createElement('div');
    div.innerHTML = '这是一个登陆框';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
};

var createSingleLoginLayer = getSingle(createLoginLayer);

document.getElementById('loginBtn').onclick = function () {
    var loginLayer = createSingleLoginLayer();
    loginLayer.style.displa = 'block';
}



