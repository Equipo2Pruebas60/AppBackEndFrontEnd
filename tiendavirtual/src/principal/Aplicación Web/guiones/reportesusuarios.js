/**
 * 
 */
$(document).ready(function(){
	console.log('Funcionando');
	
listadoU();
	
	function listadoU(){
	   $.ajax({
	        type: "GET",
	        url: "http://localhost:8080/usuarios/listar",  
	        success: function(data) {
				const usuarios = data;
				let template='';
				usuarios.forEach(usuario => {
					template += `
						<tr>
							<td style="font-size: 13px">${usuario.cedulaUsuario}</td>
							<td style="font-size: 13px">${usuario.emailUsuario}</td>
							<td style="font-size: 13px">${usuario.nombreUsuario}</td>
							<td style="font-size: 13px">${usuario.usuario}</td>
							<td style="font-size: 13px">${usuario.password} </td>
							
						
						</tr>	
						`				
				});
				$('#cuerpoTabla').html(template);
	         }
	      });
	}
	
})

