package com.ubosque.tiendavirtual;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.ubosque.DAO.Connection;
import com.ubosque.DAO.ProductosDAO;

@SpringBootApplication
@ComponentScan(basePackages = {"com.ubosque.tiendavirtual"})
public class TiendavirtualApplication {

	public static void main(String[] args) {
		SpringApplication.run(TiendavirtualApplication.class, args);
		Connection connection = new Connection(); 
		connection.getConnection();
		
	}
}
