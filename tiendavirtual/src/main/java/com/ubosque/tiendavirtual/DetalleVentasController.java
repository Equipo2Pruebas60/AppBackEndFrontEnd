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
import com.ubosque.DAO.DetalleVentasDAO;
import com.ubosque.DAO.ProveedorDAO;
import com.ubosque.DAO.UsuarioDAO;
import com.ubosque.DAO.VentasDAO;
import com.ubosque.DTO.Clientes;
import com.ubosque.DTO.DetalleVentas;
import com.ubosque.DTO.Proveedores;
import com.ubosque.DTO.Usuario;
import com.ubosque.DTO.Ventas;

@RestController
@ComponentScan(basePackages = { "com.ubosque.DAO" })
@RequestMapping("/detalleVentas")

public class DetalleVentasController {
	
	@PostMapping("guardar")
	public void agregarDetalleVentas(@RequestBody DetalleVentas detalleVentas) {
		DetalleVentasDAO detalleVentasDAO = new DetalleVentasDAO();
		detalleVentasDAO.crearDetalleVenta(detalleVentas);
	}
	
}
