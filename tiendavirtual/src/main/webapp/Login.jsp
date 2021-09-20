<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>Login</title>
<link rel="stylesheet" href="css/login.css">
<link rel="stylesheet" href="css/bootstrap.min.css">
</head>

<body>
	<div class="contenedor">
		<div class="formulario sombra-dark">
			<h1>Iniciar Sesión</h1>

			<form method="POST" action="#">
				<div class="campos">
					<label htmlFor="email">Email</label> <input type="email" id="email"
						name="email" placeholder="Ingresa tu email" />
				</div>

				<div class="campos">
					<label htmlFor="password">Password</label> <input type="password"
						id="password" name="password" placeholder="Ingresa tu contraseña" />
				</div>

				<div class="campos">
					<label for="file-upload" class="upload"> <i
						class="fas fa-cloud-upload-alt"></i>
						<p>Subir archivos</p> <input type="file" id="file-upload"
						name="file-upload" onchange="nameFile()">
				</div>

				<div class="campos bg-info d-grid gap-2">
					<input type="submit" class="btn btn-primary" value="Iniciar Sesión" />
				</div>

			</form>

		</div>
	</div>

	<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
	<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	<script
		src="https://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>

</body>
</html>