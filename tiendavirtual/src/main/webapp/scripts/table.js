
var saveme =  $.ajax({
        type: "POST",
        url: "http://localhost:8090/listarUsuarios", //ruta de la API consultaremos.
      
        success: function(data) {
          $.each(data, function(i, item) {
          lista = document.getElementById("cuerpoTabla");
          var tr = document.createElement("tr");
	 
          var columna1 = document.createElement("th")
          columna1.innerHTML = item.cedulaUsuario;
          var columna2 = document.createElement("th")
          columna2.innerHTML = item.emailUsuario;
          var columna3 = document.createElement("th")
          columna3.innerHTML = item.nombreUsuario;
	      var columna4 = document.createElement("th")
          columna4.innerHTML = item.password;
          var columna5 = document.createElement("th")
          columna5.innerHTML = item.usuario;
        
          lista.appendChild(tr);
          tr.appendChild(columna1);
          tr.appendChild(columna2);
          tr.appendChild(columna3);
       	  tr.appendChild(columna4);
	      tr.appendChild(columna5);
       	
			template += `
                  <tr taskId="${task.id}">
                  <td>${task.id}</td>
                  <td>
                  <a href="#" class="task-item">
                    ${task.name} 
                  </a>
                  </td>
                  <td>${task.description}</td>
                  <td>
                    <button class="task-delete btn btn-danger">
                     Delete 
                    </button>
                  </td>
                  </tr>
                `

         });
        }
      });
