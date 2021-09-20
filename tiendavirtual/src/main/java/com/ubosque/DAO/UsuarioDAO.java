package com.ubosque.DAO;
import com.ubosque.DTO.Usuario;
import java.sql.*;
import java.util.ArrayList;
import javax.swing.JOptionPane;
public class UsuarioDAO {
    
    //CREACION METODOS DEL CRUD
	
    public ArrayList<Usuario> ListUsers(){
        ArrayList<Usuario>usuarios = new ArrayList<Usuario>();
        Connection connection = new Connection();
        
        try {
            PreparedStatement statement = connection.getConnection().prepareStatement("SELECT * FROM usuarios");
            ResultSet result = statement.executeQuery();
            while(result.next()) {
            	Usuario usuario = new Usuario();
                usuario.setCedulaUsuario(Integer.parseInt(result.getString("cedula_usuario")));
                usuario.setEmailUsuario(result.getString("email_usuario"));
                usuario.setNombreUsuario(result.getString("nombre_usuario"));
                usuario.setPassword(result.getString("password"));
                usuario.setUsuario(result.getString("usuario"));
                
                usuarios.add(usuario);
            } 
            
            result.close();
            statement.close();
            
        }catch (SQLException e) {
        	JOptionPane.showMessageDialog(null,"no se pudo realizar la consulta\n"+e);
        }
        
        return usuarios;
    }
    
    // METODO DE CREAR USUSARIO
    public void createUser(Usuario usuario) {
    	
    	Connection connection = new Connection();
        try {
            String query= "INSERT INTO usuarios (cedula_usuario, email_usuario, nombre_usuario, password, usuario) VALUES (?,?,?,?,?)";
            PreparedStatement statement = connection.getConnection().prepareStatement(query);
            statement.setInt(1, usuario.getCedulaUsuario());
            statement.setString(2, usuario.getEmailUsuario());
            System.out.print(usuario.getEmailUsuario());
            statement.setString(3, usuario.getNombreUsuario());
            statement.setString(4, usuario.getPassword());
            statement.setString(5, usuario.getUsuario());
            statement.executeUpdate();
            System.out.println("Se agregó el usuario");
            statement.close();
            connection.connection.close();
        }catch(SQLException e) {
            System.out.println(e.getMessage());
        
        }
	}
    
    
}
