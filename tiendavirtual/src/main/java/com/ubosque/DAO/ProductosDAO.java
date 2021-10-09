package com.ubosque.DAO;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.swing.JOptionPane;

import com.ubosque.DTO.Productos;
import com.ubosque.DTO.Proveedores;
import com.ubosque.DTO.Usuario;
import com.univocity.parsers.common.record.Record;
import com.univocity.parsers.csv.CsvParser;
import com.univocity.parsers.csv.CsvParserSettings;

import org.springframework.web.multipart.MultipartException;
import org.springframework.web.multipart.MultipartFile;


public class ProductosDAO {
	
	// Método que lee el archivo CSV
	public ArrayList<Productos> readCSV(MultipartFile file) throws IOException {

		ArrayList<Productos> productos = new ArrayList<>();
		InputStream inputStream = file.getInputStream();
		CsvParserSettings settings = new CsvParserSettings();
		settings.setHeaders("codigoProducto", "nombreProducto", "nitproveedor", "precioCompra", "ivaventa", "precioVenta" );
		CsvParser parser= new CsvParser(settings);
		List<Record> records =  parser.parseAllRecords(inputStream);
		records.forEach(record->{
			Productos producto= new Productos(Integer.parseInt(record.getString("codigoProducto")),record.getString("nombreProducto"),Integer.parseInt(record.getString("nitproveedor")),Double.parseDouble(record.getString("preciocompra")),Double.parseDouble(record.getString("ivaVenta")),Double.parseDouble(record.getString("precioVenta")));
			productos.add(producto);
		});
		return(productos);
		
	}
	
	
	
	public void crearProducto(Productos producto) {
		Connection connection = new Connection();
		try {
			PreparedStatement statement = connection.getConnection().prepareStatement(
					"INSERT INTO productos (codigo_producto, ivaventa, nitproveedor, nombre_producto, precio_compra, precio_venta ) values (?,?,?,?,?,?)");
			statement.setInt(1, producto.getCodigoProducto());
			statement.setDouble(2, producto.getIvaventa());
			statement.setInt(3, producto.getNitproveedor());
			statement.setString(4, producto.getNombreProducto());
			statement.setDouble(5, producto.getPrecioCompra());
			statement.setDouble(6, producto.getPrecioVenta());
			int result = statement.executeUpdate();

			if (result == 1) {
				System.out.print("Usuario agregado");
			} else {
				System.out.print("Ha ocurrido un error");
			}

			statement.close();
			connection.connection.close();
		} catch (SQLException e) {
			System.out.println(e.getMessage());
		}
	}
	
	public void agregarProductos(ArrayList<Productos> productos) {
		ProveedorDAO proveedorDAO=new ProveedorDAO();
		
			for(Productos producto: productos) {
				ArrayList<Proveedores> proveedor=proveedorDAO.listarProveedor(producto.getNitproveedor());
				if(proveedor.size()==1) {
						this.crearProducto(producto);
					}
			}
			
	}

	// comentario
	public ArrayList<Productos> listProductos() {
		ArrayList<Productos> productos = new ArrayList<Productos>();
		Connection connection = new Connection();

		
		try {
			PreparedStatement statement = connection.getConnection().prepareStatement("SELECT * FROM productos");
			ResultSet result = statement.executeQuery();
				while(result.next()) {
					
					Productos producto = new Productos();
					producto.setCodigoProducto(Integer.parseInt(result.getString("codigo_producto")));
					producto.setIvaventa(Double.parseDouble(result.getString ("ivaventa")));
					producto.setNitproveedor(Integer.parseInt(result.getString("nitproveedor")));
					producto.setNombreProducto(result.getString("nombre_producto"));
					producto.setPrecioCompra(Double.parseDouble(result.getString ("precio_compra")));
					producto.setPrecioVenta(Double.parseDouble(result.getString ("precio_venta")));
					productos.add(producto);
				}
				result.close();
				statement.close();
			} catch (SQLException e) {
				JOptionPane.showMessageDialog(null, "no se pudo realizar la consulta\n" + e);
			}
			return productos;
		}
}
