$(document).ready(function(){
	
	console.log("JQuery funcionando");
	
	$("#formulario").submit(e => {
		e.preventDefault();
	 	
	
		$.ajax({
			type:"POST",
			async: false,
			data: JSON.stringify({usuario:$("#usuario").val(), password:$("#password").val()}),
			url:"http://localhost:8090/api/usuarios/auth",
			contentType: "application/json",
			success: function(response){
				console.log(response);
				let cedula_usuario = response;
				window.location="principal.jsp?cedula_usuario="+cedula_usuario;
			}
		});
	});
	
});