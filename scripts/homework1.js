var el = document.querySelector('.tr');
var str = '';
for(var i = 1; i < 10; i++){
	for(var j = 1; j < 10; j++){
		//用document.write在文件上印出i*j = ans
		var setNum = '<td>'+i"*"j"="i*j+'</td>';
		str += setNum;
	}
el.innerHTML =str ;
