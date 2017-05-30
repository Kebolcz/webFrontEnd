var myImage = (function () {
	var imgNode = document.createElement('img');
	document.body.appendChild(imgNode);
	return {
		setSrc: function (src) {
			imgNode.src = src;
		}
	}
})();



var proxyImage = (function () {
	var img = new Image;
	img.onload = function () {
		//加载完后告诉真正的接口src是记载后的src,lazy赋值
		myImage.setSrc(this.src);
	}
	return {
		setSrc: function (src) {
			//首先用一张loading菊花图提示用户图片正在加载...
			myImag.setSrc('file:// /C:/Users/svenzeng/Desttop/loading.gif');
			//给代理img赋值src,等img的src图片加载完后,执行onload里的方法
			img.src = src;
		}
	}
})();

proxyImage.setSrc('http://imgcache.qq.com/music/photo/k/OOOGGDYsoyAoNk.jpg');