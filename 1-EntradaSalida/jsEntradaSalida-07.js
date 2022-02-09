/*FLORENCIA SILVANA ANTONAZZO
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroparciado1;
	let numeroparciado2;

    numeroparciado1 = parseInt(document.getElementById("txtIdNumeroUno").value); 
	numeroparciado2 = parseInt(document.getElementById("txtIdNumeroDos").value);

    resultado = numeroparciado1 + numeroparciado2 ;

	mensaje ="la suma da " + resultado; 

	alert(mensaje);



}

	
	function restar()
{
	let numeroparciado1;
	let numeroparciado2;

    numeroparciado1 = parseInt(document.getElementById("txtIdNumeroUno").value); 
	numeroparciado2 = parseInt(document.getElementById("txtIdNumeroDos").value);

    resultado = numeroparciado1 - numeroparciado2 ;

	mensaje ="la resta da " + resultado; 

	alert(mensaje);

}

function multiplicar()
{   
	
	let numeroparciado1;
	let numeroparciado2;

    numeroparciado1 = parseInt(document.getElementById("txtIdNumeroUno").value); 
	numeroparciado2 = parseInt(document.getElementById("txtIdNumeroDos").value);

    resultado = numeroparciado1 * numeroparciado2;

	mensaje ="la multiplicacion da " + resultado;

	alert(mensaje);

	
}

function dividir()
{    
	
	
	let numeroparciado1;
	let numeroparciado2;

    numeroparciado1 = parseInt(document.getElementById("txtIdNumeroUno").value); 
	numeroparciado2 = parseInt(document.getElementById("txtIdNumeroDos").value);

    resultado = numeroparciado1 / numeroparciado2;

	mensaje ="la divicion da " + resultado; 

	alert(mensaje);

	
}

