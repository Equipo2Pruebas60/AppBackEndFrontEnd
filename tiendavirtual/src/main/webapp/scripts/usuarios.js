
$(document).ready(function(){
	console.log('Funcionando');
	listado();

$("#formulario").submit(e =>{
	e.preventDefault();
	
	const datos ={
		cedulaUsuario: $("#cedula").val(),
	 	emailUsuario: $("#email").val(),
	  	nombreUsuario: $("#nombre").val(),
	 	password: $("#clave").val(),
	 	usuario: $("#usuario").val()
	};
	console.log(datos);
	
	$.ajax({
            type: "POST",
            url: "http://localhost:8090/agregarUsuario",
            async: false,
            data: JSON.stringify({ cedulaUsuario: $("#cedula").val(), emailUsuario: $("#email").val(),nombreUsuario:$("#nombre").val(),password: $("#clave").val(), usuario: $("#usuario").val()}),
            contentType: "application/json",
            complete: function (data) {
            console.log(data); 
		 	listado();
			limpiadoCampos();	
        }
    });
});
function limpiadoCampos(){
		  $("#cedula").val("");
	 	  $("#email").val("");
	  	  $("#nombre").val("");
	 	  $("#clave").val("");
	 	  $("#usuario").val("");
}
function listado(){
   $.ajax({
        type: "GET",
        url: "http://localhost:8090/listarUsuarios",  
        success: function(data) {
			const usuarios = data;
			let template='';
			usuarios.forEach(usuario => {
				template += `
					<tr>
						<td style="font-size: 13px">${usuario.cedulaUsuario}</td>
						<td style="font-size: 13px">${usuario.emailUsuario}</td>
						<td style="font-size: 13px">${usuario.nombreUsuario}</td>
						<td style="font-size: 13px">${usuario.password}</td>
						<td style="font-size: 13px">${usuario.usuario}</td>
						<td style="font-size: 13px"><button id="${usuario.cedulaUsuario}"   type="button" class="btn btn-info modificar">Modificar</button></td>
						<td style="font-size: 13px"><button id="${usuario.cedulaUsuario}" type="button" class="btn btn-danger borrar">Eliminar</button></td>
					</tr>
				`
			});
			$('#cuerpoTabla').html(template);
         }
      });
}

	$(document).on('click','.borrar',(response)=> {
		
		const cedula = $(".borrar").attr('id');
 		$.ajax({
			type:"DELETE",
			url:"http://localhost:8090/eliminarUsuario/"+cedula,
			success: function(response){
				listado();
			}
		});
		
	});
	$(document).on('click','.modificar',(response)=> {
		console.log('cLICK BORRAR');
	});
});
