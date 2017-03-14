//显示计算算式的func
function display(){
    var str = "";
    str += $("#inputX").val();
    switch(Number($("#opera").val())){
        case 1:
            str += " + ";
            break;
        case 2:
            str += " - ";
            break;
        case 3:
            str += " * ";
            break;
        case 4:
            str += " / ";
            break;
    }
    str += $("#inputY").val();
    $("#monitor").val(str);
}

$("#inputX").keyup(function(){
    if(isNaN($("#inputX").val())){
        alert("请输入有效数字!");
        $("#inputX").val("");
    }
    display();
});

$("#inputY").keyup(function(e){
    if(isNaN($("#inputX").val())){
        alert("请输入有效数字!");
        $("#inputX").val("");
    }
    if($("#opera").val()=="4"&&$("#inputY").val()=="0"){
        alert("被除数不能为0");
        $("#inputY").val("");
        return false;
    }
    display();
});

$("#opera").change(function(e){
    display();
});

$("#doit").click(function(){
    var str = "";
    var X = Number($("#inputX").val());
    var Y = Number($("#inputY").val());
    switch(Number($("#opera").val())){
        case 1:
            str += $("#inputX").val() + " + " + $("#inputY").val() + " = " + (X+Y);
            break;
        case 2:
            str += $("#inputX").val() + " - " + $("#inputY").val() + " = " + (X-Y);
            break;
        case 3:
            str += $("#inputX").val() + " * " + $("#inputY").val() + " = " + (X*Y);
            break;
        case 4:
            str += $("#inputX").val() + " / " + $("#inputY").val() + " = " + (X/Y);
            break;
    }
    $("#monitor").val(str);
});