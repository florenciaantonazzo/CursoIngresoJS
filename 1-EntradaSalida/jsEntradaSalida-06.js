/*FLORENCIA SILVANA ANTONAZZO
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

