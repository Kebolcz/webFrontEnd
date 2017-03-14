var checkLegal = function(num){
	var goal = num.trim();
	if(!isNaN(goal)&&Number(goal)>=0&&Number(goal)<=100){
		return true;
	}else{
		return false;
	}
}
$("#commit").click(function(){
	var items = $('#form').serializeArray();
	var map =new Map();

	//var pattern = /^([1-9]\d{0,1}\.\d*|100)$/;
	for (var i = 0; i < items.length; i++) {
		if(items[i].value==null||items[i].value==""){
			alert("第"+(i/2+1)+"条名字不能为空!");
			return false;
		}
		// if(!pattern.test(items[i+1].value)){
		// 	alert("第"+(i/2+1)+"条成绩不合法!");
		// 	return false;
		// }
		if(!checkLegal(items[i+1].value)){
			alert("第"+(i/2+1)+"条成绩不合法!");
		 	return false;
		}
		map.set(items[i].value,items[++i].value);
	};
	map.forEach(function(value,key){
		if(value>=90){
			alert(key+"成绩优秀");
		}else if(value>=80&&value<90){
			alert(key+"成绩优良!");
		}else if(value>=70&&value<80){
			alert(key+"成绩中等!");
		}else if(value>=60&&value<70){
			alert(key+"成绩及格!");
		}else if(value<60){
			alert(key+"成绩不及格!");
		}
	});
});