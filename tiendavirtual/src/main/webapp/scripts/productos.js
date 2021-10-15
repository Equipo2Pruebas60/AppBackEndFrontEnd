$(document).ready(function(){
	
		listado();
		
		function validarExension(){
			var ext = $("#file-csv").val().split('.')[1];;
			var isCSV=true;
			if(ext!="csv"){
				alert("El archivo debe ser CSV");
				isCSV=false
			}
			return isCSV;
		}
		
		$("#formulario").submit(e =>{
		e.preventDefault();
		 var isCSV= validarExension();
	    var form_data = new FormData();
		var file_data = $("#file-csv").prop("files")[0];
		form_data.append("file-csv", file_data)
		if(isCSV){
			$.ajax({
	type: "POST",
    url: "http://localhost:8080/productos/subirCSV",
    data: form_data,
    cache: false,
    contentType: false,
    processData: false,
    enctype: 'multipart/form-data',
	success: function(response){
				listado();
				alert("Archivo subido");
			 }
				})
		 
		}
		

		})
		
		function listado(){
	   $.ajax({
	        type: "GET",
	        url: "http://localhost:8080/productos/listar",  
	        success: function(data) {
				const productos = data;
				let template='';
				productos.forEach(producto => {
					template += `
						<tr>
							<td style="font-size: 13px">${producto.codigoProducto}</td>
							<td style="font-size: 13px">${producto.ivaventa}</td>
							<td style="font-size: 13px">${producto.nitproveedor}</td>
							<td style="font-size: 13px">${producto.nombreProducto}</td>
							<td style="font-size: 13px">${producto.precioCompra}</td>
							<td style="font-size: 13px">${producto.precioVenta}</td>
							<td style="font-size: 13px" ><button id="${producto.codigoProducto}"   type="button" class="btn btn-info ver p-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver</button></td>
							<td style="font-size: 13px" ><button id="${producto.codigoProducto}"   type="button" class="btn btn-info modificar p-1">Modificar</button></td>
							<td style="font-size: 13px" ><button id="${producto.codigoProducto}"   type="button" class="btn btn-danger borrar p-1" >Eliminar</button></td>
							
						</tr>
					`
				});
				$('#cuerpoTabla').html(template);
	         }
	      });
	}
	
	$(document).on('click','.borrar',(response)=> {
		const codigo = $(".borrar").attr('id');
 		$.ajax({
			type:"DELETE",
			url:"http://localhost:8080/productos/eliminar/"+codigo,
			success: function(response){
				listado();
				alert("Producto borrado");
			}
		});
	});
		
	
	})
	 //comentario