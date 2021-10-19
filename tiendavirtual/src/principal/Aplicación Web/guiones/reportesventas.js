$(document).ready(function(){

	var cedulaCliente= localStorage.getItem("usuario");
	console.log(cedulaCliente);
	
	listadoV();
	function listadoV(){
	   $.ajax({
	        type: "GET",
	        url: "http://localhost:8080/reporte/listar"+cedulaCliente,  
	        success: function(data) {
				const reportes = data;
				let template='';
				reportes.forEach(reporte => 
				{
					template += `
						<tr>
							
							<td style="font-size: 13px">${reporte.cedulaCliente}</td>
							<td style="font-size: 13px">${reporte.nombreCliente}</td>
							<td style="font-size: 13px">${reporte.valor_venta}</td>
							<td style="font-size: 13px" ><button id="${reporte.cedulaCliente}"   type="button" class="btn btn-info ver p-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver</button></td>
												
						</tr>	
						`				
				});
				$('#cuerpoTabla').html(template);
	         }
	      });
	}
	
	
	$(document).on('click', '#buscarCliente', () => {
	var cedulaCliente = $('#cedula').val();

	$.ajax({
		type: "GET",
		url: "http://localhost:8080/reporte/listar"+cedulaCliente,
		success: function(response) {
			let reporte = response[0];
			if(Object.keys(response).length===0){ 
				alert("La cedula del usuario no existe en la base de datos");
				return null};
			$("#nombreCliente").val(reporte.nombreCliente);
			}	
		});
	})
})
