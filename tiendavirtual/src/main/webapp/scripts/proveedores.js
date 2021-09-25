
$(document).ready(function(){
	console.log('Funcionando');
	
	listado();
	let flag = false;
	var btnCancelar = $("#cancelarOP");
	btnCancelar.css("display","none");
		
	$("#formulario").submit(e =>{
		e.preventDefault();
		
		const datos ={
			nitProveedor: $("#nit").val(),
		 	ciudadProveedor: $("#ciudad").val(),
		  	direccionProveedor: $("#direccion").val(),
		 	nombreProveedor: $("#nombre").val(),
		 	telefonoProveedor: $("#telefono").val()
		};
		
		const nit =  $("#nit").val();

		let url = '';
		let type= '';
		if(flag){
			url = "http://localhost:8090/proveedores/actualizar/"+nit;
			type= "PUT";
			mensaje="Datos del proveedor Actualizados";
		}else{
			url = "http://localhost:8090/proveedores/guardar";
			type= "POST";
			mensaje="Datos del proveedor Creado";
		}

		$.ajax({
	            type: type,
	            url: url,
	            async: false,
	            data: JSON.stringify({ nitProveedor: $("#nit").val(),
									 	ciudadProveedor: $("#ciudad").val(),
									  	direccionProveedor: $("#direccion").val(),
									 	nombreProveedor: $("#nombre").val(),
									 	telefonoProveedor: $("#telefono").val()}),
	            contentType: "application/json",
	            complete: function (data) {

				 	listado();
				
					limpiadoCampos();	
					
					flag = false;
					
					alert(mensaje);
					
					$("#nit").removeAttr('disabled');
	        }
	    });
	});

	function limpiadoCampos(){
			  $("#nit").val("");
		 	  $("#ciudad").val("");
		  	  $("#direccion").val("");
		 	  $("#nombre").val("");
		 	  $("#telefono").val("");
	}
	
	function listado(){
	   $.ajax({
	        type: "GET",
	        url: "http://localhost:8090/proveedores/listar",  
	        success: function(data) {
				const proveedores = data;
				let template='';
				proveedores.forEach(proveedor => {
					template += `
						<tr>
							<td style="font-size: 13px">${proveedor.nitProveedor}</td>
							<td style="font-size: 13px">${proveedor.ciudadProveedor}</td>
							<td style="font-size: 13px">${proveedor.direccionProveedor}</td>
							<td style="font-size: 13px">${proveedor.nombreProveedor}</td>
							<td style="font-size: 13px">${proveedor.telefonoProveedor}</td>
							<td style="font-size: 13px" ><button id="${proveedor.nitProveedor}"   type="button" class="btn btn-info ver p-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver</button></td>
							<td style="font-size: 13px" ><button id="${proveedor.nitProveedor}"   type="button" class="btn btn-info modificar p-1">Modificar</button></td>
							<td style="font-size: 13px" ><button id="${proveedor.nitProveedor}"   type="button" class="btn btn-danger borrar p-1" >Eliminar</button></td>
						</tr>
					`
				});
				$('#cuerpoTabla').html(template);
	         }
	      });
	}

	$(document).on('click','.borrar',(response)=> {
		const nitProveedor = $(".borrar").attr('id');
 		$.ajax({
			type:"DELETE",
			url:"http://localhost:8090/proveedores/eliminar/"+nitProveedor,
			success: function(response){
				listado();
				alert("Datos del proveedor Borrados");
			}
		});
	});
	
	$(document).on('click','.modificar',(response)=> {
			const nit_p = $(this)[0].activeElement;
			const nitproveedor = $(nit_p).attr('id');
			console.log(nitptoveedor);
			
			var btnCancelar = $("#cancelarOP");
			btnCancelar.css("display","block");
			
			$("#nit").attr('disabled',true);
	 	
		 $.ajax({
			type:"GET",
			url:"http://localhost:8090/proveedores/listar/"+nitproveedor,
			success: function(response){
				
				const proveedor = response[0];
				
				$("#nit").val(proveedor.nitProveedor);
			 	$("#ciudad").val(proveedor.ciudadProveedor);
			  	$("#direccion").val(proveedor.direccionProveedor);
			 	$("#nombre").val(proveedor.nombreProveedor);
			 	$("#telefono").val(proveedor.telefonoProveedor);
				
				flag = true;	
			}
		});
		
	});
	
	$(document).on('click','.cancelar',(response)=> {	
		limpiadoCampos();
		
		flag = false;
		
		var btnCancelar = $("#cancelarOP");
		btnCancelar.css("display","none");
		$("#cedula").removeAttr('disabled');
	});
	
	
	$(document).on('click','.ver',(response)=> {
			const cedula = $(this)[0].activeElement;
			const cedula_usuario = $(cedula).attr('id');
			 	
		 $.ajax({
			type:"GET",
			url:"http://localhost:8090/proveedor/listar/"+cedula_usuario,
			success: function(response){

				const usuario = response[0];

				$("#cedula_modal").html(usuario.cedulaUsuario);
			 	$("#email_modal").html(usuario.emailUsuario);
			  	$("#nombre_modal").html(usuario.nombreUsuario);
			 	$("#clave_modal").html(usuario.password);
			 	$("#usuario_modal").html(usuario.usuario);
				
			}
		});
		
	});
	
	
});