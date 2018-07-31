package bts.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.sql.DataSource;

import bts.bo.Bugs;


public class BugsDAO {
	//private static String table_name = "bugs";
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
	
	public static String createBugId(Bugs bug) {
		Random rand=new Random();
		int num=rand.nextInt(500)+100;
		String bug_id="B"+"_"+bug.getProject_id()+num;
		return bug_id;
	}
	
	
	public static int raiseBug(Bugs bug) {
		//write code to perform insert operation
		//to insert we need driver and driver url and credentials
		Connection con = null;
		String sql="INSERT INTO bugs VALUES(?,?,?,?,?,?,?,?,?,?,?)";
	
		int result=0;
		try {
			//Class.forName("oracle.jdbc.OracleDriver");
			con = getConnection();
			PreparedStatement ps = con.prepareStatement(sql);
			
			String bug_id=BugsDAO.createBugId(bug);
			
			ps.setString(1,bug_id);
			ps.setInt(2, bug.getProject_id());
			ps.setString(3, bug.getBug_name());
			ps.setString(4,bug.getBug_desc());
			ps.setInt(5, bug.getBug_priority());
			ps.setDate(6, bug.getBugraiseddate());
			ps.setNull(7, java.sql.Types.DATE);
			ps.setNull(8, java.sql.Types.DATE);
			ps.setNull(9, java.sql.Types.VARCHAR);
			ps.setInt(10, bug.getEmp_id());
			ps.setString(11,bug.getBugstatus());
			
			
			result = ps.executeUpdate();
			
			//return result;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 		finally {
			closeConnection(con);
		}
		return result;
	}
	
	
	
	public static List<Bugs> getAllBugs(){
		List<Bugs> bugList = new ArrayList<>();
		PreparedStatement ps = null;
		Connection connect = null;
		try {
		connect=getConnection();
		String sql = "SELECT bug_id, project_id, bug_name from bugs";
		
			ps=connect.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				String bug_id = rs.getString(1);
				int project_id = rs.getInt(2);
				String bug_name = rs.getString(3);
				
				bugList.add(new Bugs(bug_id,project_id,bug_name,null,0,null,null,null,null,0,null));
			}
			rs.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return bugList;
		
	}
	
	public static int assignBug(Bugs bug) {
		Connection con = null;
		String sql="UPDATE bugassigneddate=? INTO bugs WHERE bug_id=?";
	
		int result=0;
		try {
			Class.forName("oracle.jdbc.OracleDriver");
			con = getConnection();
			PreparedStatement ps = con.prepareStatement(sql);
			
			ps.setString(1,bug.getBug_id());
			ps.setDate(2, bug.getBugassigneddate());
			
			
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
	}
