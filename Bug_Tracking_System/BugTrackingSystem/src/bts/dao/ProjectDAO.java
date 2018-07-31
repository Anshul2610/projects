package bts.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.sql.DataSource;

import bts.bo.ProjectBO;

public class ProjectDAO {
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
	public static int addProject(ProjectBO proj) {
		//write code to perform insert operation
		
		Connection con=null;
		String sql = "INSERT INTO project VALUES(?,?,?,?,?,?)";
		int result = 0;
		try {
//			Class.forName("oracle.jdbc.OracleDriver");
			con = getConnection();
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, proj.getProject_id());
			ps.setString(2, proj.getProject_name());
			ps.setDate(3,(Date) proj.getStart_date());
			ps.setDate(4, (Date)proj.getEnd_date());
			ps.setString(5,proj.getProject_status());
			ps.setInt(6, proj.getManager_id());
			
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
