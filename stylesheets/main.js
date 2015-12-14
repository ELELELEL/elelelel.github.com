var storage = window.localStorage;
if (!storage.getItem("shengming")) storage.setItem("shengming",100);
shengming = parseInt(storage.getItem("shengming"));//必须格式转换
document.getElementById("a1").innerHTML = "生命值" + shengming;
showStorage();

setInterval(	function() 
	{ 
	  document.getElementById("shengmingzhi").innerHTML = "生命值" + shengming;
	} , 1000);
