// JavaScript Document
var nombre = prompt("Indique nombre");
		console.log(nombre);
		if( nombre != null)
		{
			document.getElementById('mensaje').innerHTML = "¡Bienvenido " + nombre + "!";
		}