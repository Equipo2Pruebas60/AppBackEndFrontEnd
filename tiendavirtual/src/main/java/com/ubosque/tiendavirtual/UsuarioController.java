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
@RequestMapping("/api")
public class UsuarioController {

	@RequestMapping("usuarios")
	public ArrayList<Usuario> listaUsuario() {
		UsuarioDAO usuarioDAO = new UsuarioDAO();
		return usuarioDAO.ListUsers();
	}
	
	@RequestMapping("usuarios/{cedula_usuario}")
	public ArrayList<Usuario> listaUsuarioUno(@PathVariable("cedula_usuario") int cedula) {
		UsuarioDAO usuarioDAO = new UsuarioDAO();
		return usuarioDAO.ListUser(cedula);
	}

	@PostMapping("usuarios")
	public void agregarUsuario(@RequestBody Usuario usuario) {
		UsuarioDAO usuarioDAO = new UsuarioDAO();
		usuarioDAO.createUser(usuario);
	}

	@DeleteMapping("usuarios/{cedula_usuario}")
	public void eliminarUsuario(@PathVariable("cedula_usuario") int cedula_usuario) {
		UsuarioDAO usuarioDAO = new UsuarioDAO();
		usuarioDAO.deleteUser(cedula_usuario);
	}

	@PutMapping("usuarios/{cedula_usuario}")
	public void updatePerson(@PathVariable int cedula_usuario, @RequestBody Usuario usuario) {
		UsuarioDAO usuarioDAO = new UsuarioDAO();
		usuarioDAO.updateUser(usuario);
	}
	
	@PostMapping("usuarios/auth")
	public int auth(@RequestBody Usuario usuario) {
		UsuarioDAO usuarioDAO = new UsuarioDAO();
		return usuarioDAO.login(usuario.getUsuario(), usuario.getPassword());
	}
	
}
