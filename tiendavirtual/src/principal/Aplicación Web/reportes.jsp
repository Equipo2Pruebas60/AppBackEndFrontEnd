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
				   <li class="nav-item"><a class="nav-link " href="usuarios.jsp">Usuarios
				   		</a></li>
					<li class="nav-item"><a class="nav-link " href="clientes.jsp">Clientes</a></li>					
					<li class="nav-item"><a class="nav-link " href="proveedores.jsp">Proveedores</a> </li>					
					<li class="nav-item"><a class="nav-link " href="productos.jsp">Productos</a></li>
					<li class="nav-item"><a class="nav-link" href="ventas.jsp">Ventas</a></li>
					<li class="nav-item"><a class="nav-link active" href="reportes.jsp">Reportes</a>
					<span class="visually-hidden">(current)</span></li>  
					
					
					   
				</ul>
			</div>
		</div>
	</nav>
	   
	   	<br><br><br>
	<h5>Seleccione el reporte que desea ver</h5>	
	
		<br><br><br>
		<div class="row">
						<div class="col-md-6">
							<div class="d-grid gap-2">
								<button class="navbar-toggler" type="button"
									data-bs-toggle="collapse" data-bs-target="#navbarColor03"
									aria-controls="navbarColor03" aria-expanded="false"
									aria-label="Toggle navigation">
									<span class="navbar-toggler-icon"></span>
									</button>
		
									   <li  class="btn btn-primary mt-3"><a class="nav-link active" href="reportesusuarios.jsp" style="color:white;">LISTADO DE USUARIOS
									   		</a><span class="visually-hidden">(current)</span></li>
										<li class="btn btn-primary mt-3"><a class="nav-link " href="reportesclientes.jsp"style="color:white;">LISTADO DE CLIENTES</a></li>					
									
										<li class="btn btn-primary mt-3"><a class="nav-link" href="reportesventas.jsp"style="color:white;">VENTAS POR CLIENTES</a></li>
										
					</div>		
				</div>
		</div>
	
	
	<br><br><br>	

		
		
			
			
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
	<script src="scripts/reportes.js"></script>


	<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
	<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	<script src="https://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>



</body>
</html>
