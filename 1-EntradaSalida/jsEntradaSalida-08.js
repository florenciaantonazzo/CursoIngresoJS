/*FLORENCIA SILVANA ANTONAZZO
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroparciado1;
	let numeroparciado2;
	let resultado;
	let mensaje;

    numeroparciado1 = parseInt(document.getElementById("txtIdNumeroDividendo").value); 
	numeroparciado2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);

    resultado = numeroparciado1 % numeroparciado2 ;

	mensaje ="el resto da " + resultado; 

	alert(mensaje);





}
