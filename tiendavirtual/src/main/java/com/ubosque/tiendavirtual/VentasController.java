package com.ubosque.tiendavirtual;

import java.util.ArrayList;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubosque.DAO.ClienteDAO;
import com.ubosque.DAO.ProveedorDAO;
import com.ubosque.DAO.UsuarioDAO;
import com.ubosque.DAO.VentasDAO;
import com.ubosque.DTO.Clientes;
import com.ubosque.DTO.Proveedores;
import com.ubosque.DTO.Usuario;
import com.ubosque.DTO.Ventas;

@RestController
@ComponentScan(basePackages = { "com.ubosque.DAO" })
@RequestMapping("/ventas")
public class VentasController {
	

	@PostMapping("guardar")
	public void agregarVenta(@RequestBody Ventas ventas) {
		VentasDAO ventasDAO = new VentasDAO();
		ventasDAO.crearVenta(ventas);
	}
	
	@RequestMapping("codigo")
	public int codigo() {
		VentasDAO ventasDAO = new VentasDAO();
		return ventasDAO.listarCodigoVenta();
	}
	
	

}