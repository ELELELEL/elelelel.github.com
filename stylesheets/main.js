var storage = window.localStorage;
if (!storage.getItem("shengming")) storage.setItem("shengming",100);
shengming = parseInt(storage.getItem("shengming"));//必须格式转换
showStorage();
