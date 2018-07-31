package bts.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.sql.DataSource;

public class LoginDAO {
public static DataSource dataSource;
	
	private static Connection getConnection(){
		Connection connect = null;
		try {
			connect=dataSource.getConnection();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return connect;
	}
	public static String check(String user,String pass) {
		String resp = null;
		
		Connection connect=null;
		String sql= "select EMP_ID, MAIL_ID, PASSWORD,TYPEID from employee where MAIL_ID=?";
		int result = 0;
		try {
			connect = getConnection();
			PreparedStatement ps = connect.prepareStatement(sql);
			ps.setString(1, user);
			
			ResultSet rs=ps.executeQuery();

			if(rs.next()){
				int typeid = rs.getInt(4);
				System.out.println(typeid);

				String dbpass = rs.getString(3);
				//System.out.println(dbpass);
				//System.out.println(pass);
				if(pass.equals(dbpass))
				{
					resp = "success";
				}
			else{
				resp = "fail";
				}
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		finally {
			closeConnection(connect);
		}
			return resp;
}
	
	private static void closeConnection(Connection connect) {
		try {
			if(connect!=null) {
			connect.close();
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
