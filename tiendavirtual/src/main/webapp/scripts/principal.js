$(document).ready(function(){
	console.log("JQuery funcionando");
	

	function obtenerValorParametro(sParametroNombre) {
			var sPaginaURL = window.location.search.substring(1);
	 		var sURLVariables = sPaginaURL.split('&');
	  for (var i = 0; i < sURLVariables.length; i++) {
	    var sParametro = sURLVariables[i].split('=');
	    if (sParametro[0] == sParametroNombre) {
	      return sParametro[1];
	    }
	  }
	 return null;
	}

	let valor = obtenerValorParametro('cedula_usuario');
	  if (valor){
	    alert(valor);
	  }else{
	    alert("El parámetro no existe en la URL");
	  }
	
 
		
});