<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>	
<%@ page import="com.ubosque.DTO.Productos" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta http-equiv = "Content-Type" content = "multipart / form-data; charset = utf-8" /> 
<title>Tienda Generica</title>
<link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
	<h2>TIENDA GENERICA</h2>


	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Grupo 60</a>
			<button class="navbar-toggler" type="button"
				data-bs-toggle="collapse" data-bs-target="#navbarColor03"
				aria-controls="navbarColor03" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarColor03">
				<ul class="navbar-nav me-auto">
					<li class="nav-item"><a class="nav-link " href="usuarios.jsp">Usuarios
							
					</a></li>
					<li class="nav-item"><a class="nav-link " href="clientes.jsp">Clientes</a>
					</li>
					<li class="nav-item"><a class="nav-link " href="proveedores.jsp">Proveedores
					<span class="visually-hidden">(current)</span></a>
					</li>
					<li class="nav-item"><a class="nav-link active" href="#">Productos</a></li>
					<li class="nav-item"><a class="nav-link" href="#">Ventas</a></li>
					<li class="nav-item"><a class="nav-link" href="#">Reportes</a></li>
				</ul>
			</div>
		</div>
	</nav>

<div >
			<div class="container p-2" style="border: 1px solid #BEB8B6;">
				
				<form id="formulario"  enctype="multipart/form-data">
        		<h2>Subir archi CSV de productos</h2>
        		<label for="file-csv" class="upload">
            	<input type="file" id="file-csv" name="file-csv"  accept=".csv" > 
        		</label>
        		<div> 
        		<input type="submit" class="btn btn-primary" id="upload-file"></button> 
        		</div>
        		</form>
				</div>
		</div>
	<br>
	<div class="container-fluid row pl-0  ">
		<div class>
			<div class="table-responsive ">
				<table
					class="table table-dark table-hover table-sm table-bordered  ">
					<thead>
						<tr>
							<td class="text-lowercase" style="font-size: 16px;">Código producto</td>
							<td class="text-lowercase" style="font-size: 16px;">IVA venta</td>
							<td class="text-lowercase" style="font-size: 16px;">NIT proveedor</td>
							<td class="text-lowercase" style="font-size: 16px;">Nombre producto</td>
							<td class="text-lowercase" style="font-size: 16px;">Precio compra</td>
							<td class="text-lowercase" style="font-size: 16px;">Precio venta</td>
							<td class="text-lowercase" style="font-size: 16px;">Ver</td>
							<td class="text-lowercase" style="font-size: 16px;">Modificar</td>
							<td class="text-lowercase" style="font-size: 16px;">Eliminar</td>
						</tr>
					</thead>
					<tbody id="cuerpoTabla">

					</tbody>
				</table>

			</div>
		</div>

		</div>

<!--  comentario -->

	<script src="https://code.jquery.com/jquery-3.3.1.min.js"
		integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
		crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
	<script src="scripts/productos.js"></script>
</body>
</html>