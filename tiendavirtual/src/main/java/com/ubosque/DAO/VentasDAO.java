package com.ubosque.DAO;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.swing.JOptionPane;

import com.ubosque.DTO.Clientes;
import com.ubosque.DTO.Productos;
import com.ubosque.DTO.Usuario;
import com.ubosque.DTO.Ventas;
public class VentasDAO {
	
	// Metodos Crud
	
	// Metodo para crear una venta
		public void crearVenta(Ventas ventas) {
			Connection connection = new Connection();
			try {
				int codigo=0;
				String query = "SELECT max(codigo_venta) as codigo FROM ventas";
				PreparedStatement statement = connection.getConnection().prepareStatement(query);
				ResultSet resultSet = statement.executeQuery();
				if (resultSet.next()) {
					codigo = resultSet.getInt("codigo");
					System.out.println("Existe el código \n");
				} 
				
				query = "INSERT INTO ventas (codigo_venta, cedula_cliente, cedula_usuario, ivaventa, total_venta, valor_venta )VALUES (?,?,?,?,?,?)";
				statement = connection.getConnection().prepareStatement(query);
				statement.setInt(1, codigo+1);
				statement.setInt(2, ventas.getCedulaCliente());
				statement.setInt(3, ventas.getCedulaUsuario());
				statement.setDouble(4, ventas.getIvaVenta());
				statement.setDouble(5, ventas.getTotal_venta());
				statement.setDouble(6, ventas.getValor_venta());
				
				statement.executeUpdate();
				System.out.println("La venta fué registrada");
				statement.close();
				connection.connection.close();
			} catch (SQLException e) {
				System.out.println(e.getMessage());
			}

		}
		
		public int listarCodigoVenta() {
			Connection connection = new Connection();
			int codigo = 0;
			try {
				String query = "SELECT max(codigo_venta) as codigo FROM ventas";
				PreparedStatement statement = connection.getConnection().prepareStatement(query);
				ResultSet resultSet = statement.executeQuery();
				if (resultSet.next()) {
					codigo = resultSet.getInt("codigo");
					System.out.println("Existe el código \n");
				} else {
					codigo=0;
					System.out.println("El código no existe");
				}
				resultSet.close();
				statement.close();
				connection.connection.close();
			} catch (SQLException e) {
				System.out.println(e.getMessage());
			}
			return codigo;
		}
		
}
		
	
