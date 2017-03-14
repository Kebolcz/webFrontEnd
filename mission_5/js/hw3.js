var array = new Array();
$("#inputX").keyup(function(){
	array = $("#inputX").val().split("");
	$("#monitor").val(array);
});
$("#doit").click(function(){
	var json = {},
		count = 0,
		maxChar = null;
	for(var x of array){
		if(!json[x]){
			json[x] = [];
		}
		json[x].push(x);
	}
	for(var item in json){
		if(count < json[item].length){
			count = json[item].length;
			maxChar = json[item][0];
		}
	}
	var indexArr = [];
	for(var i=0;i<array.length;i++){
		if(array[i] == maxChar){
			indexArr.push(i);
		}
	}
	var str = "";
	str += "maxRateChar: '"+ maxChar +"'; count: "+ count +" ; index: "+ indexArr +";";
	$("#monitor1").val(str);
});