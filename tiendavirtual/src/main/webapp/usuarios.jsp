<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
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
					<li class="nav-item"><a class="nav-link active" href="#">Usuarios
							<span class="visually-hidden">(current)</span>
					</a></li>
					<li class="nav-item"><a class="nav-link" href="#">Clientes</a>
					</li>
					<li class="nav-item"><a class="nav-link" href="#">Proveedores</a>
					</li>
					<li class="nav-item"><a class="nav-link" href="#">Productos</a></li>
					<li class="nav-item"><a class="nav-link" href="#">Ventas</a></li>
					<li class="nav-item"><a class="nav-link" href="#">Reportes</a></li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="container-fluid row p-4">
		<div class="col-md-8 bg-info">

			<table class="table table-dark table-hover table-sm">
				<thead>
					<tr >
						<td class="text-lowercase">Cedula</td>
						<td class="text-lowercase">Email</td>
						<td class="text-lowercase">Nombre</td>
						<td class="text-lowercase">Contraseña</td>
						<td class="text-lowercase">Usuario</td>
						<td class="text-lowercase">Modificar</td>
						<td class="text-lowercase">Eliminar</td>
					</tr>
				</thead>
				<tbody id="cuerpoTabla" >

				</tbody>
			</table>

		</div>

		<div class="col-md-4 p-2 bg-danger">B</div>
	</div>




	<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
	<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	<script
		src="https://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>
	<script src="scripts/table.js"></script>


</body>
</html>