/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	
  //* reservo espacio en la memoria para guarsar el nombre del usuario

     let nombre ;

  // Guardo en la variable nombre el texto que introdujo el usuario en la ventana prompt

     nombre = prompt ("ingrese su nombre");


 //  Copio el nombre wue tengo guardado en la variable nombre (prompt) dentro de la caja de texto dentro de la ID html
      
     document.getElementById("txtIdNombre").value = nombre ;




}

