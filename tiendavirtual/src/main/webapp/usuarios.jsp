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

	<div class="container-fluid row pl-0  ">
		<div class="col-md-9  p-2">
			<div class="table-responsive ">
				<table
					class="table table-dark table-hover table-sm table-bordered  ">
					<thead>
						<tr>
							<td class="text-lowercase" style="font-size: 16px;">Cedula</td>
							<td class="text-lowercase" style="font-size: 16px;">Email</td>
							<td class="text-lowercase" style="font-size: 16px;">Nombre</td>
							<td class="text-lowercase" style="font-size: 16px;">Contraseña</td>
							<td class="text-lowercase" style="font-size: 16px;">Usuario</td>
							<td class="text-lowercase" style="font-size: 16px;">Modificar</td>
							<td class="text-lowercase" style="font-size: 16px;">Eliminar</td>
						</tr>
					</thead>
					<tbody id="cuerpoTabla">

					</tbody>
				</table>

			</div>
		</div>

		<div class="col-md-3 p-2 ">
				<div class="container p-2" style="border: 1px solid #BEB8B6;">
					<form id="formulario">
						<div class="form-group">
							<label for="cedula">Cedula</label> <input type="text"
								class="form-control" id="cedula" placeholder="Ingresar cedula">
						</div>

						<div class="form-group">
							<label for="email">Email</label> <input type="email"
								class="form-control" id="email" placeholder="Ingresar cedula">
						</div>

						<div class="form-group">
							<label for="nombre">Nombre</label> <input type="text"
								class="form-control" id="nombre" placeholder="Ingresar nombre">
						</div>

						<div class="form-group">
							<label for="clave">Password</label> <input type="password"
								class="form-control" id="clave"
								placeholder="Ingresar contraseña">
						</div>

						<div class="form-group">
							<label for="usuario">Usuario</label> <input type="text"
								class="form-control" id="usuario" placeholder="Ingresar usuario">
						</div>

						<div class="d-grid gap-2">
							<button type="submit" class="btn btn-primary mt-3">Submit</button>
						</div>
					</form>
				</div>
	 
		</div>
	</div>


	<script src="https://code.jquery.com/jquery-3.3.1.min.js"
		integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
		crossorigin="anonymous"></script>

	<script src="scripts/usuarios.js"></script>

</body>
</html>