package bts.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.sql.DataSource;

import bts.bo.ProjMembersBO;

public class ProjMembersDAO {
public static DataSource dataSource;
	
	private static Connection getConnection(){
		Connection con=null;
		try {
			con=dataSource.getConnection();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return con;
	}
	public static int addProjMembers(ProjMembersBO proj) {
		//write code to perform insert operation
		
		Connection con=null;
		String sql = "INSERT INTO project VALUES(?,?,?)";
		int result = 0;
		try {
//			Class.forName("oracle.jdbc.OracleDriver");
			con = getConnection();
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, proj.getId());
			ps.setInt(2, proj.getProject_id());
			ps.setInt(3, proj.getEmp_id());
			
			result = ps.executeUpdate();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		finally {
			closeConnection(con);
		}
		return result;
	}
	
	
	private static void closeConnection(Connection con) {
		try {
			if(con!=null) {
			con.close();
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
