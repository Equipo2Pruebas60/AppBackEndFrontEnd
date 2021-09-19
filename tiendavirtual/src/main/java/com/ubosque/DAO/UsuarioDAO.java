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
        Usuario usuario = new Usuario();
        try {
            PreparedStatement statement = connection.getConnection().prepareStatement("SELECT * FROM usuarios");
            ResultSet result = statement.executeQuery();
            while(result.next()) {
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
}
