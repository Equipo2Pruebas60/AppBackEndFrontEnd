package com.ubosque.tiendavirtual;


import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.autoconfigure.h2.H2ConsoleProperties.Settings;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ubosque.DAO.ProductosDAO;
import com.ubosque.DAO.UsuarioDAO;
import com.ubosque.DTO.Productos;
import com.ubosque.DTO.Usuario;
import com.univocity.parsers.common.record.Record;
import com.univocity.parsers.csv.CsvParser;
import com.univocity.parsers.csv.CsvParserSettings;

// comentario

@RestController
	@ComponentScan(basePackages = { "com.ubosque.DAO" })
	@RequestMapping("/productos")
public class ProductosController {
	ProductosDAO productosDAO=new ProductosDAO();
	
	@PostMapping("subirCSV")
	public void uploadCSVFile(@RequestParam("file-csv") MultipartFile file) throws IOException{
		productosDAO.agregarProductos(productosDAO.readCSV(file));
		
	}	
	
	@RequestMapping("listar")
	public ArrayList<Productos> listaProductos() {
		ProductosDAO productosDAO = new ProductosDAO();
		return productosDAO.listProductos();
	}
	
	
}
