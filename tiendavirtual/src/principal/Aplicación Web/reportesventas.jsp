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
	
	
	<input type=button value= Regresar  onclick="history.go(-1)">
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
		
										<li class="btn btn-primary mt-3"><a class="nav-link active" href="reportesventas.jsp"style="color:white;">...REPORTE...
											</a><span class="visually-hidden">(current)</span></li>
					</div>		
				</div>
		</div>
	
	
	<br><br><br>
	
	<h5> Ingrese numero de cedula del cliente</h5>	
	
	<input type=button value= Buscar  onclick="history.go(cedulaUsuario)">
	
	<br><br><br>
	
	<div class="row g-3">
			<div class="col-md-3">        		
        		<input type="number" class="form-control" id="cedula" name="inputCedula" placeholder="Cédula Cliente" required>    
        	</div>        	     
        	<div class="col-md-2"> 		        	
        		<input type="button" name="buscarCliente" id="buscarCliente" class="btn btn-primary" value="Buscar">     	
         	</div>         
			
        </div>  
	
	
	
	
	
		<br><br><br>
	
	<h3> Listado de ventas por Clientes</h3>
	<br><br><br>
	<div class="container-fluid row pl-0  ">
		<div class="col-md-9  p-2">
			<div class="table-responsive ">
				<table
					class="table table-dark table-hover table-sm table-bordered  ">
					<thead>
						<tr>
							
							<td class="text-lowercase" style="font-size: 16px;">Cedula</td>
							<td class="text-lowercase" style="font-size: 16px;">Nombre</td>
							<td class="text-lowercase" style="font-size: 16px;">Valor Total Ventas</td>
							
						</tr>
					</thead>
					<tbody id="cuerpoTabla">

					</tbody>
				</table>

			</div>
		</div>
<br><br><br>
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
	<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
	<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	<script src="https://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>
	<script src="scripts/reportesventas.js"></script>


</body>
</html>
