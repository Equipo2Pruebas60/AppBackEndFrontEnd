
package com.ubosque.tiendavirtual;

import java.util.ArrayList;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubosque.DAO.ClienteDAO;
import com.ubosque.DAO.DetalleVentasDAO;
import com.ubosque.DAO.UsuarioDAO;
import com.ubosque.DAO.VentasDAO;
import com.ubosque.DTO.Clientes;
import com.ubosque.DTO.DetalleVentas;
import com.ubosque.DTO.Usuario;
import com.ubosque.DTO.Reportes;

@RestController
@ComponentScan(basePackages = { "com.ubosque.DAO" })
@RequestMapping("/reportes")
public class ReportesController {
	
	
	@RequestMapping("listar/{cedula_usuario}")
	public ArrayList<Reportes> showReporte(@PathVariable("cedula_usuario") int cedula_usuario){
		VentasDAO ventaDAO = new VentasDAO();
		return ventaDAO.listarReporte(cedula_usuario);
	}
	
}
