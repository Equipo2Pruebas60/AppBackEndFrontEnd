package com.ubosque.tiendavirtual;


import java.io.IOException;
import java.util.ArrayList;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ubosque.DAO.ClienteDAO;
import com.ubosque.DAO.ProductosDAO;
import com.ubosque.DTO.Clientes;
import com.ubosque.DTO.Productos;


@RestController
	@ComponentScan(basePackages = { "com.ubosque.DAO" })
	@RequestMapping("/productos")
public class ProductosController {
	ProductosDAO productosDAO=new ProductosDAO();
	
	@RequestMapping("listarProducto/{codigo_producto}")
	public ArrayList<Productos> listarProducto(@PathVariable("codigo_producto") int codigo_producto) {
		ProductosDAO productosDAO = new ProductosDAO();
		return productosDAO.listarProducto(codigo_producto);
	}
	
	@PostMapping("subirCSV")
	public void uploadCSVFile(@RequestParam("file-csv") MultipartFile file) throws IOException{
		productosDAO.agregarProductos(productosDAO.readCSV(file));
		
	}	
	
	@RequestMapping("listar")
	public ArrayList<Productos> listaProductos() {
		ProductosDAO productosDAO = new ProductosDAO();
		return productosDAO.listProductos();
	}
	
	@DeleteMapping("eliminar/{codigo_producto}")
	public void eliminarUsuario(@PathVariable("codigo_producto") int codigoProducto) {
		productosDAO.deleteProducto(codigoProducto);
	}
	
}