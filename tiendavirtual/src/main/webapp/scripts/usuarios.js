
$(document).ready(function(){
	console.log('Funcionando');
	listado();
	let flag = false;
$("#formulario").submit(e =>{
	e.preventDefault();
	
	const datos ={
		cedulaUsuario: $("#cedula").val(),
	 	emailUsuario: $("#email").val(),
	  	nombreUsuario: $("#nombre").val(),
	 	password: $("#clave").val(),
	 	usuario: $("#usuario").val()
	};
	const cedula =  $("#cedula").val();
	console.log(cedula);
	let url = '';
	let type= '';
	if(flag){
		url = "http://localhost:8090/actualizarUsuario/"+cedula;
		type= "PUT";
	}else{
		url = "http://localhost:8090/agregarUsuario";
		type= "POST";
	}
	console.log(url);
	$.ajax({
            type: type,
            url: url,
            async: false,
            data: JSON.stringify({ cedulaUsuario: $("#cedula").val(), emailUsuario: $("#email").val(),nombreUsuario:$("#nombre").val(),password: $("#clave").val(), usuario: $("#usuario").val()}),
            contentType: "application/json",
            complete: function (data) {
            console.log(data); 
		 	listado();
			limpiadoCampos();	
			flag = false;
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
			const cedula = $(this)[0].activeElement;
			const cedula_usuario = $(cedula).attr('id');
			console.log(cedula_usuario);
		 $.ajax({
			type:"GET",
			url:"http://localhost:8090/listarUsuarios/"+cedula_usuario,
			success: function(response){
				console.log(response);
				const usuario = response[0];
				console.log(usuario);
				$("#cedula").val(usuario.cedulaUsuario);
			 	$("#email").val(usuario.emailUsuario);
			  	$("#nombre").val(usuario.nombreUsuario);
			 	$("#clave").val(usuario.password);
			 	$("#usuario").val(usuario.usuario);
				flag = true;
				
			}
		})
	});
});
