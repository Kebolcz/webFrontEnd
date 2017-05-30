/**
 * 适合在几个容器里把容器里的元素在各个容器里拖来拖去
 */
var dragUI = {
	dragObj : null,       //被拖动的元素
	tempDiv : null,       //临时存放拖动的对象
	tempDivW : null,      //临时存放拖动的对象的宽度
	dragDiv : null,       //存放被拖动对象的容器
	dragDivSize : null,   //存放被拖动对象的容器里面子元素的个数
	mouseOffset : null,   //鼠标的在拖动元素中的位置
	DragContainer : null, //可以存放被拖动对象的容器列
	dragitems : "",       //存放被拖动对象的容器class
	dragitem : "",        //被拖动对象class
	curDragDiv : null,    //最后一个放置拖动对象的容器
	/**
	 * 格式化事件
	 */
	getEvent : function(){
		if (document.all) return window.event;
		func = this.getEvent.caller;
		while (func != null) {
			var arg0 = func.arguments[0];
			if (arg0) {
				if ((arg0.constructor == Event || arg0.constructor == MouseEvent) || (typeof(arg0) == "object" && arg0.preventDefault && arg0.stopPropagation)) {
					return arg0;
				}
			}
			func = func.caller;
		}
		return null;
	},
	/**
	 * 得到鼠标的位置
	 */
	mouseCoords : function(ev){
		if (ev.pageX || ev.pageY) {
			return {
				x: ev.pageX,
				y: ev.pageY
			};
		}
		return {
			x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
			y: ev.clientY + document.body.scrollTop - document.body.clientTop
		};
	},
	/**
	 * 得到元素的位置
	 */
	getPosition : function(ele){
		var left = 0;
		var top = 0;
		while (ele.offsetParent) {
			left += ele.offsetLeft;
			top += ele.offsetTop;
			ele = ele.offsetParent;
		}
		left += ele.offsetLeft;
		top += ele.offsetTop;
		return {
			x: left,
			y: top
		};
	},
	/**
	 * 得到鼠标在拖动元素中的位置
	 */
	getMouseOffset : function(target, ev){
		var docPos = dragUI.getPosition(target);
		var mousePos = dragUI.mouseCoords(ev);
		return {
			x: mousePos.x - docPos.x,
			y: mousePos.y - docPos.y
		};
	},
	/**
	 * 鼠标移动时
	 */
	mouseMove : function(){
		var ev = dragUI.getEvent();
		var mousePos = dragUI.mouseCoords(ev);
		if (dragUI.dragObj) {
			//可拖动的个数为1,说明拖动后此列就没有拖动元素，为避免此列没有高度而不见，所以设置其高度为20px
			if (dragUI.dragDivSize == 1) dragUI.dragDiv.style.height = "32px";
			dragUI.dragObj.style.display = "none";
			//把拖动的元素加入到临时的tmpDiv中，并设置tmpDiv坐标
			dragUI.tempDiv.html("");
			var tmpnode = dragUI.dragObj.cloneNode(true);
			tmpnode.style.display = "block";
			dragUI.tempDiv.append(tmpnode).css("width",dragUI.tempDivW + "px")
										  .css("background-color","#FFF")
										  .css("top",(mousePos.y - dragUI.mouseOffset.y) + "px")
										  .css("left",(mousePos.x - dragUI.mouseOffset.x) + "px")
										  .show();
			//被拖动对象的中心点的坐标(以鼠标坐标代替)
			var dragObjCntX = mousePos.x;
			var dragObjCntY = mousePos.y;
			//判断tmpDiv所在的容器
			var dragConLen = dragUI.DragContainer.length;
			for (var i = 0; i < dragConLen; i++) {
				var curContainer = dragUI.DragContainer[i];
				var dcPos = dragUI.getPosition(curContainer);
				var dcPosMinX = dcPos.x;
				var dcPosMinY = dcPos.y;
				var dcWidth = curContainer.offsetWidth;
				var dcHeight = curContainer.offsetHeight;
				var dcPosMaxX = dcPosMinX + dcWidth;
				var dcPosMaxY = dcPosMinY + dcHeight;
				if (dragObjCntX > dcPosMinX && dragObjCntX < dcPosMaxX && dragObjCntY > dcPosMinY && dragObjCntY < dcPosMaxY) {
					if($(dragUI.curDragDiv).attr("id") != $(curContainer).attr("id")){
						dragUI.curDragDiv = curContainer;	
						curContainer.appendChild(dragUI.dragObj);
					}
					$(dragUI.dragObj).show();
					break;
				}
			}
		}
		return false;
	},
	/**
	 * 鼠标松开事件
	 */
	mouseUp : function(){
		if (dragUI.dragObj) {
			if (dragUI.dragObj.style.display == "none") dragUI.dragObj.style.display = "block";
			dragUI.tempDiv.hide();
			for (var m = 0; m < dragUI.DragContainer.length; m++) {
				var colDiv = dragUI.DragContainer[m];
				var colDivLen = $(colDiv).children("." + dragUI.dragitem).length;
				var colSty = colDiv.getAttribute("style");
				if (colDivLen > 0 && colSty != null) {
					colDiv.removeAttribute("style");
					break;
				}
			}
			dragUI.dragObj = null;
		}
	},
	/**
  	 * 开始拖动事件
	 */
	startDrag : function(dragitems,dragitem){
		if(!dragitems || !dragitem){
			alert("request param");
			return;
		}
		this.dragitems = dragitems;
		this.dragitem = dragitem;
		document.onmousemove = this.mouseMove;
		document.onmouseup = this.mouseUp;
		dragUI.tempDiv = $("<div id='dragUI_tempDiv' style='position:absolute;display:none;'></div>");
		$("body").append(dragUI.tempDiv);
		$("." + dragUI.dragitem).bind("mousedown",function(){	
			var ev = dragUI.getEvent();
			dragUI.dragObj = this; //被拖动的对象
			dragUI.dragDiv = dragUI.dragObj.parentNode;//启动时存放被拖动对象的容器
			dragUI.curDragDiv = dragUI.dragObj.parentNode;//最后一个存放被拖动对象的容器
			dragUI.dragDivSize = $(dragUI.dragDiv).children("." + dragUI.dragitem).length;//计算存放被拖动对象的容器还剩下几个对象
			dragUI.mouseOffset = dragUI.getMouseOffset(dragUI.dragObj, ev);//获得鼠标的相对被拖动对象的位置
			dragUI.tempDivW = dragUI.dragObj.offsetWidth;//获取被拖动对象的宽度
			dragUI.DragContainer = $("." + dragUI.dragitems);//允许存放被拖动对象的容器列表
			return false;
		});
	},
	/**
	 * 结束拖动事件
	 */
	stopDrag : function(){
		document.onmousemove = null;
		document.onmouseup = null;
		$("#dragUI_tempDiv").remove();
		dragUI.tempDiv = null;
		$("." + dragUI.dragitem).unbind();
	}
}; 

