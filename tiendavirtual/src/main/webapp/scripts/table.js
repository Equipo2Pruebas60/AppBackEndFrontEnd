
var saveme =  $.ajax({
        type: "GET",
        url: "http://localhost:8090/listarUsuarios", //ruta de la API consultaremos.
      
        success: function(data) {
			const usuarios = JSON.parse(data);
			let template='';
			usuarios.forEach(usuario => {
				template += `
					<tr>
						<td>${usuario.cedulaUsuario}</td>
						<td>${usuario.emailUsuario}</td>
						<td>${usuario.nombreUsuario}</td>
						<td>${usuario.password}</td>
						<td>${usuario.usuario}</td>
						<td><button type="submit" class="btn btn-danger">Modificar</button></td>
						<td><button type="submit" class="btn btn-danger">Eliminar</button></td>
					</tr>
				`
			});
			$('#cuerpoTabla').html(template);
         }
      });
