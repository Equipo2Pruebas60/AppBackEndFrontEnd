package com.ubosque.DAO;

import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.ubosque.DTO.DetalleVentas;
import com.ubosque.DTO.Ventas;

public class DetalleVentasDAO {

	// Metodo para crear una venta
			public void crearDetalleVenta(DetalleVentas detalleVentas) {
				Connection connection = new Connection();
				try {
					String query = "INSERT INTO detalle_ventas (cantidad_producto, codigo_producto, codigo_venta, valor_venta, valoriva, valor_total )VALUES (?,?,?,?,?,?)";
					PreparedStatement statement = connection.getConnection().prepareStatement(query);
					statement.setInt(1, detalleVentas.getCantidadProducto());
					statement.setInt(2, detalleVentas.getCodigoProducto());
					statement.setInt(3, detalleVentas.getCodigoVenta());
					statement.setDouble(4, detalleVentas.getValorVenta());
					statement.setDouble(5, detalleVentas.getValorIva());
					statement.setDouble(6, detalleVentas.getValorTotal());
					
					statement.executeUpdate();
					System.out.println("El detalle de la venta fué registrad0");
					statement.close();
					connection.connection.close();
				} catch (SQLException e) {
					System.out.println(e.getMessage());
				}

			}
	
}
