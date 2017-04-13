/**
 * [layout description]:布局func
 * @return void 调整页面box,达到瀑布流效果
 */
function layout() {
    //一行num张图片
    var num = Math.floor($(window).width() / 212);
    var box = $('.box');
    var heightArr = [];
    box.each(function(index, element) {
        if (index < num) {
            heightArr.push($(element)[0].clientHeight);
        } else {
            //一行图片中,高度最低的那张图片的index=0,1,2,3
            var i = heightArr.indexOf(Math.min.apply(null, heightArr));
            $(element).css({
                'position': 'absolute',
                'left': i * 212 + 'px',
                'top': Math.min.apply(null, heightArr)
            });
            heightArr[i] += $(element)[0].clientHeight;
        }
    });
}

layout();

/*
    模拟aJax请求返回的数据
 */
var data = {
    img: [{
        'src': './img/1.jpg'
    }, {
        'src': './img/2.jpeg'
    }, {
        'src': './img/3.jpg'
    }, {
        'src': './img/4.jpg'
    }, {
        'src': './img/5.jpg'
    }, {
        'src': './img/6.jpg'
    }, {
        'src': './img/7.jpg'
    }, {
        'src': './img/8.jpg'
    }, {
        'src': './img/9.jpeg'
    }, {
        'src': './img/10.jpg'
    }, {
        'src': './img/11.jpg'
    }, {
        'src': './img/12.jpg'
    }, {
        'src': './img/13.jpeg'
    }]
};
/**
 * [监听页面滚动]
 * [if true 就增加dom节点到指定位置]
 */
$(window).scroll(function() {
    if (scrollBtm()) {
        $.each(data.img, function(index, value) {
            var box = $('<div>').addClass('box').appendTo($('#container'));
            var content = $('<div>').addClass('content').appendTo(box);
            $('<img>').attr('src', value.src).appendTo(content);
        });
        layout();
    }
});
/**
 * [判断页面滚动方法]
 * @return {[Boolean]} [页面滚动超过最后一个box的offset+其高度的一半后返回true]
 */
function scrollBtm() {
    var lastDomOffsetH = $('.box').last()[0].offsetTop;
    var lastDomHalfH = Math.floor($('.box').last()[0].clientHeight / 2);
    //滚动的高度加上屏幕的高度
    var scrollHeight = $(window).scrollTop() + $(window).height();
    return scrollHeight > lastDomOffsetH + lastDomHalfH ? true : false;
}
