<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
</head>
<body>
    <ul>
        <li><a href="pagina.html">Usuarios</a></li>
        <li> <a href="formulario.html">Clientes</a></li>  
        <li>proveedores</li>
        <li>productos</li>  
        <li>ventas</li>
        <li>reportes</li>
    </ul>
    <hr>
    <form action="">
        <h2>Ingresar</h2>
        <input type="text" class="inputs" id="input1" name="inputUser" placeholder="Usuario">
        <input type="paspassword" class="inputs" id="input2" name="inputPassword" placeholder="Contraseña">
        <label for="file-upload" class="upload">
            <i class="fas fa-cloud-upload-alt"></i>Subir archivos
            <input type="file" id="file-upload" name="file-upload" onchange="nameFile()"> 
        </label>
        <div id="file"></div>
        <input type="submit" name="login" id="input3" class="button" value="INICIAR SESIÓN">
    </form>
    <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
	<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	<script src="https://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>

</body>
</html>