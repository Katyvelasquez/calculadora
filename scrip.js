
var num='';
var resultado='';

function retornar(operacion){

	num=num+operacion
	document.getElementById("valores").value=num;
	alert(num)

}

function signo(operacion){

	num=num+operacion
	document.getElementById("valores").value=operacion;
	alert(operacion)
}
function calcular(){
	var resultado=eval(num)
	document.getElementById('valores').value=resultado;


}