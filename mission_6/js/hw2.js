document.addEventListener('DOMContentLoaded', function() {
    //屏幕物理像素
    var screenWidth = document.documentElement.clientWidth;
    var scale = 20;
    $("html").css("font-size", screenWidth / scale + "px");

    function changeBGF(style) {
        switch (style) {
            case 'red':
                $('.recommendPanel').removeClass().addClass('recommendPanel borderC_red');
                $('#recommend').find('li[class^="selected"]').removeClass().addClass('selected red');
                $('.hotLogo li[class^="hot"]').removeClass().addClass('hot_red');
                break;
            case 'yellow':
                $('.recommendPanel').removeClass().addClass('recommendPanel borderC_yellow');
                $('#recommend').find('li[class^="selected"]').removeClass().addClass('selected yellow');
                $('.hotLogo li[class^="hot"]').removeClass().addClass('hot_yellow');
                break;
            case 'blue':
                $('.recommendPanel').removeClass().addClass('recommendPanel borderC_blue');
                $('#recommend').find('li[class^="selected"]').removeClass().addClass('selected blue');
                $('.hotLogo li[class^="hot"]').removeClass().addClass('hot_blue');
                break;
            case 'green':
                $('.recommendPanel').removeClass().addClass('recommendPanel borderC_green');
                $('#recommend').find('li[class^="selected"]').removeClass().addClass('selected green');
                $('.hotLogo li[class^="hot"]').removeClass().addClass('hot_green');
                break;
            case 'purple':
                $('.recommendPanel').removeClass().addClass('recommendPanel borderC_purple');
                $('#recommend').find('li[class^="selected"]').removeClass().addClass('selected purple');
                $('.hotLogo li[class^="hot"]').removeClass().addClass('hot_purple');
                break;
        }
    }

    if (window.localStorage.getItem('bgStyle') != null) {
        window.bgStyle = localStorage.getItem('bgStyle');
        changeBGF(window.bgStyle);
    } else {
        window.bgStyle = 'green';
        changeBGF(window.bgStyle);
    }

    let app = document.getElementById('recommend');

    // 事件侦听器绑定到整个容器上
    app.addEventListener('click', function(e) {

        if (e.target && e.target.nodeName === 'LI') {
            $(this).find('li').removeClass();
            e.target.className = "selected " + localStorage.getItem('bgStyle');
        }
    });

    let changeBG = document.getElementById('changeBG');

    // 事件侦听器绑定到整个容器上
    changeBG.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === 'I') {
            switch (e.target.className) {
                case 'red':
                    localStorage.setItem('bgStyle', 'red');
                    changeBGF('red');
                    break;
                case 'yellow':
                    localStorage.setItem('bgStyle', 'yellow');
                    changeBGF('yellow');
                    break;
                case 'blue':
                    localStorage.setItem('bgStyle', 'blue');
                    changeBGF('blue');
                    break;
                case 'green':
                    localStorage.setItem('bgStyle', 'green');
                    changeBGF('green');
                    break;
                case 'purple':
                    localStorage.setItem('bgStyle', 'purple');
                    changeBGF('purple');
                    break;
            }
        }
    });
});
