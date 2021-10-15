
//buscar cliente por cedula
$(document).on('click', '#buscarCliente', () => {
	var cedula_cliente = $('#cedula').val();

	$.ajax({
		type: "GET",
		url: "http://localhost:8080/clientes/listar/" + cedula_cliente,
		success: function(response) {
			let cliente = response[0];
			if(Object.keys(response).length===0){ 
				alert("El cliente no se encontro");
				return null};
			$("#nombreCliente").val(cliente.nombreCliente);
		}	
	});
	
})


let iva1=0;
let ivaVenta1=0
let valorTotal1=0;
let valorProducto1=0;


//buscar producto 1 ingresando el codigo del producto
$(document).on('click', '#buscarProducto1', () => {
	var codigo_producto1 = $("#CodProducto1").val();

	$.ajax({
		type: "GET",
		url: "http://localhost:8080/productos/listarProducto/" + codigo_producto1,
		success: function(response) {

			const producto1 = response[0];

			$("#nombreProducto1").val(producto1.nombreProducto);
			valorProducto1=producto1.precioVenta;
			console.log(valorProducto1);
			iva1=producto1.ivaventa/100;
			console.log(iva1)
		}
	})
})



//calcular valor de venta del producto1 de acuerdo con la cantidad ingresada
$(document).on('change', '#Cantidad1', () => {

			document.getElementById("valorVenta1").value = $("#Cantidad1").val() * valorProducto1;
			console.log(iva1);
			ivaVenta1=$("#valorVenta1").val()*iva1;
			console.log(ivaVenta1);
			valorTotal1=parseFloat($("#valorVenta1").val())+parseFloat(ivaVenta1);
			console.log(valorTotal1)
})


let iva2=0;
let ivaVenta2=0
let valorTotal2=0;
let valorProducto2=0;

//buscar producto 2 ingresando el codigo del producto
$(document).on('click', '#buscarProducto2', () => {
	var codigo_producto2 = $("#CodProducto2").val();
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/productos/listarProducto/" + codigo_producto2,
		success: function(response) {

			const producto2 = response[0];

			$("#nombreProducto2").val(producto2.nombreProducto);
			valorProducto2=producto2.precioVenta;
			console.log(valorProducto2);
			iva2=producto2.ivaventa/100
			console.log(iva2);
		}
	})
})

//calcular valor de venta del producto2 de acuerdo con la cantidad ingresada
$(document).on('change', '#Cantidad2', () => {
	
			document.getElementById('valorVenta2').value = $("#Cantidad2").val() * valorProducto2;
			ivaVenta2=$("#valorVenta2").val()*iva2;
			console.log(ivaVenta2);
			valorTotal2=parseFloat($("#valorVenta2").val())+parseFloat(ivaVenta2);
			console.log(valorTotal2)
})


let iva3=0;
let ivaVenta3=0
let valorTotal3=0;
let valorProducto3=0;
let codigo=0;

//buscar producto 3 ingresando el codigo del producto
$(document).on('click', '#buscarProducto3', () => {
	var codigo_producto3 = $("#CodProducto3").val();
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/productos/listarProducto/" + codigo_producto3,
		success: function(response) {

			const producto3 = response[0];

			$("#nombreProducto3").val(producto3.nombreProducto);
			valorProducto3=producto3.precioVenta;
			console.log(valorProducto3);
			iva3=producto3.ivaventa/100
			console.log(iva3);
		}
	})
})

//calcular valor de venta del producto3 de acuerdo con la cantidad ingresada
$(document).on('change', '#Cantidad3', () => {
	
			document.getElementById("valorVenta3").value = $("#Cantidad3").val() * valorProducto3;
			ivaVenta3=$("#valorVenta3").val()*iva3;
			console.log(ivaVenta3);
			valorTotal3=parseFloat($("#valorVenta3").val())+parseFloat(ivaVenta3);
			console.log(valorTotal3)
})


//Calcular valor venta total, iva total y total venta con iva
$(document).on('click', '#confirmarVenta', () => {
	document.getElementById("valorVenta").value = parseFloat($("#valorVenta1").val()) + parseFloat($("#valorVenta2").val()) + parseFloat($("#valorVenta3").val());
	document.getElementById("totalIVA").value = parseFloat(ivaVenta1)+parseFloat(ivaVenta2)+parseFloat(ivaVenta3);
	document.getElementById("totalVentaIVA").value = parseFloat($("#valorVenta").val()) + parseFloat($("#totalIVA").val());

	var cliente1 = $("#cedula").val();
	var usuario = localStorage.getItem('usuario');
	var valorVenta = $("#valorVenta").val();
	var iva = $("#totalIVA").val();
	var totalVenta = $("#totalVentaIVA").val();
	
	 venta = {
		cedulaCliente: cliente1,
		cedulaUsuario: usuario,
		valor_venta: valorVenta,
		ivaVenta: iva,
		total_venta: totalVenta,
	}
	
	$.ajax({
		type: "POST",
		url: "http://localhost:8080/ventas/guardar",
		data: JSON.stringify({
			cedulaCliente: cliente1,
			cedulaUsuario: usuario,
			valor_venta: valorVenta,
			ivaVenta: iva,
			total_venta: totalVenta,
		}),
		success: function(response){
			console.log("ventaAgregada");
		},
		contentType: "application/json"
	});	
	setTimeout(function(){consultaCodigo();},5000);
	setTimeout(function(){guardarDetalleVenta1()},10000);
	setTimeout(function(){guardarDetalleVenta2()},15000);
	setTimeout(function(){guardarDetalleVenta3()},20000);
})

function consultaCodigo(){
$.ajax({
		type: "GET",
		url: "http://localhost:8080/ventas/codigo",

		contentType: "application/json",
		success: function(response) {
			 codigo=response;
			console.log(codigo+"TraeCodigo");
			$("#consecutivo").val(codigo);
		}
	});
}


function guardarDetalleVenta1(){
	$.ajax({
		type: "POST",
		url: "http://localhost:8080/detalleVentas/guardar",
		data: JSON.stringify({
			cantidadProducto: $("#Cantidad1").val(),
			codigoProducto: $("#CodProducto1").val(),
			codigoVenta: codigo,
			valorVenta: $("#valorVenta1").val(),
			valorIva: Math.round(ivaVenta1),
			valorTotal: valorTotal1,
		}),
		success: function(response) {
			console.log("GuardaDetalle");},
		contentType: "application/json"
		
	});
}

function guardarDetalleVenta2(){
	$.ajax({
		type: "POST",
		url: "http://localhost:8080/detalleVentas/guardar",
		data: JSON.stringify({
			cantidadProducto: $("#Cantidad2").val(),
			codigoProducto: $("#CodProducto2").val(),
			codigoVenta: codigo,
			valorVenta: $("#valorVenta2").val(),
			valorIva: Math.round(ivaVenta2),
			valorTotal: valorTotal2,
		}),
		contentType: "application/json"
	});
}

function guardarDetalleVenta3(){
	$.ajax({
		type: "POST",
		url: "http://localhost:8080/detalleVentas/guardar",
		data: JSON.stringify({
			cantidadProducto: $("#Cantidad3").val(),
			codigoProducto: $("#CodProducto3").val(),
			codigoVenta: codigo,
			valorVenta: $("#valorVenta3").val(),
			valorIva: Math.round(ivaVenta3),
			valorTotal: valorTotal3,
		}),
		contentType: "application/json"
	});
}