package com.ubosque.DAO;

import java.sql.SQLException;
import java.sql.DriverManager;

public class Connection {
	String database="tiendagrupo60"; 
	String user="root";
	String password= "admin123"; 
	String hostname= "tiendagrupo60.c47knbsonjdi.us-east-2.rds.amazonaws.com";
	String port= "3306";
	String url= "jdbc:mysql://" + hostname + ":" + port + "/" + database + "?user=" + user + "&password=" + password;
	java.sql.Connection connection = null;
	
	public java.sql.Connection getConnection() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			connection=DriverManager.getConnection(url);
			if(connection!=null) {
				System.out.println("Conexin exitosa a la base de datos");
			}
		}catch(SQLException e){
			e.getMessage();
		}catch(ClassNotFoundException e) {
			e.getMessage();
		}
		return connection;
	}
}
