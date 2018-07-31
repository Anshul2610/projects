package bts.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import bts.bo.Managers;

public class ManagersDAO {
	
	private static String table_name = "managers";
	public static DataSource dataSource;
	
	private static Connection getConnection() {
		Connection con = null;
		try {
			con= dataSource.getConnection();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return con;
	}
	
	private static void closeConnection(Connection con) {
		try {
			if(con!=null)
				con.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static int insertManager(Managers manager) {
		//write code to perform insert operation
		//to insert we need driver and driver url and credentials
		Connection con = null;
		String sql="INSERT INTO managers VALUES(?,?)";
	
		int result=0;
		try {
			Class.forName("oracle.jdbc.OracleDriver");
			con = getConnection();
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1,manager.getManager_id());
			ps.setString(2, manager.getManager_name());
			
			result = ps.executeUpdate();
			
			//return result;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		finally {
			closeConnection(con);
		}
		return result;
	}
	
	
	
	public static List<Managers> getAllManagers(){
		List<Managers> managerList = new ArrayList<>();
		PreparedStatement ps = null;
		Connection con = null;
		try {
		con=getConnection();
		String sql = "SELECT manager_id,manager_name from managers";
		
			ps=con.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				int manager_id = rs.getInt(1);
				String manager_name = rs.getString(2);
				
				managerList.add(new Managers());
			}
			rs.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return managerList;
		
	}
}
