
$(document).ready(function(){
	console.log('Funcionando');
	listado();
})

function listado(){
   $.ajax({
        type: "GET",
        url: "http://localhost:8090/listarUsuarios", //ruta de la API consultaremos.
      
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
						<td style="font-size: 13px"><button type="submit" class="btn btn-info ">Modificar</button></td>
						<td style="font-size: 13px"><button type="submit" class="btn btn-danger">Eliminar</button></td>
					</tr>
				`
			});
			$('#cuerpoTabla').html(template);
         }
      });
}