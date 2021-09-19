package com.ubosque.tiendavirtual;
import com.ubosque.DAO.UsuarioDAO;
import com.ubosque.DTO.Usuario;
import java.util.ArrayList;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@ComponentScan(basePackages = {"com.ubosque.DAO"})
public class UsuarioController {
	@RequestMapping("/listarUsuarios")
	public ArrayList<Usuario> listaUsuario(){
		UsuarioDAO usuarioDAO= new UsuarioDAO();
		return usuarioDAO.ListUsers();
	}
}
