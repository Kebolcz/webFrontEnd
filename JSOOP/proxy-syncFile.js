/**
 * 根据value生产正则,并用正则去test资源库,放回result
 * @param  {[type]} value [检索关键字]
 * @return {[type]}       [dispatch]分支,执行下一步
 */
var synchronousFile = function(value) {
	if (value.length < 1) {
		dispatch(mainInfo.setResult('', ''));
	}

	const re = new RegExp(_.escapeRegExp(value), 'i')
	const isMatch = (result) => re.test(result.Data07)

	let temp = _.filter(source.businessData, isMatch);
	dispatch(mainInfo.searchResult(value, false, temp));
}

var proxySynchronousFile = (function() {
	var cache, //保存一段时间内需要打包一起请求的VALUE,或者写成数组[]
		timer; //定时器

	return function(value) {
		cache = value; //或者cache.push(value)
		if (timer) { //保证不会覆盖已经启动的定时器
			return
		}

		timer = setTimeout(function() {
			synchronousFile(cache); //2s后想本体发送打包后的value到请求
			clearTimeout(timer); //清空定时器
			timer = null;
			cache = null; //清空打包
		}, 2000)
	}
})();



/**
 * @@@@@@@@@@@@@@@@@@@@@@@@****1****@@@@@@@@@@@@@@@@@@@@@@@@
 * 执行方法入口
 * 当我们在[search]中想要检索关键字,并展示信息时,页面监听onChange,每输入一个字符就调用proxySynchronousFile
 * 方法,但是不需要每改变一个字符就要请求方法,这样会带来很多不必要的开销.
 *
 * 这里使用虚拟代理模式,合并不必要的重复请求,2s后再去请求服务器或者方法.
 */
proxySynchronousFile(value);