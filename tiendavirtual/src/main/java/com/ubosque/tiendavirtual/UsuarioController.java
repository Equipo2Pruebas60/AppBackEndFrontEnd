package com.ubosque.tiendavirtual;

import com.ubosque.DAO.UsuarioDAO;
import com.ubosque.DTO.Usuario;
import java.util.ArrayList;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@ComponentScan(basePackages = { "com.ubosque.DAO" })
public class UsuarioController {

	 
	
	@RequestMapping("/listarUsuarios")
	public ArrayList<Usuario> listaUsuario() {
		UsuarioDAO usuarioDAO = new UsuarioDAO();
		return usuarioDAO.ListUsers();
	}

	@PostMapping("/agregarUsuario")
	public void agregarUsuario(@RequestBody Usuario usuario) {
		UsuarioDAO usuarioDAO = new UsuarioDAO();
		usuarioDAO.createUser(usuario);
	}

	@DeleteMapping("/eliminarUsuario/{cedula_usuario}")
	public void eliminarUsuario(@PathVariable("cedula_usuario") int cedula_usuario) {
		UsuarioDAO usuarioDAO = new UsuarioDAO();
		usuarioDAO.deleteUser(cedula_usuario);
	}

	@PutMapping("/actualizarUsuario/{cedula_usuario}")
	public void updatePerson(@PathVariable int cedula_usuario, @RequestBody Usuario usuario) {
		UsuarioDAO usuarioDAO = new UsuarioDAO();
		usuarioDAO.updateUser(usuario);
	}

}
