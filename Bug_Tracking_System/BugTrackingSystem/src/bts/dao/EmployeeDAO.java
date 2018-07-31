package bts.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.sql.DataSource;

import bts.bo.Employee;


public class EmployeeDAO {

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
	public static int registerEmployee(Employee emp) {
		//write code to perform insert operation
		
		Connection con=null;
		String sql = "INSERT INTO employees VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		int result = 0;
		try {
//			Class.forName("oracle.jdbc.OracleDriver");
			con = getConnection();
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, emp.getEmpId());
			ps.setString(2, emp.getFname());
			ps.setString(3, emp.getLname());
			ps.setDate(4,(java.sql.Date) emp.getDob());
			ps.setString(5, emp.getHouseNo());
			ps.setString(6, emp.getStreetName());
			ps.setString(7, emp.getStateName());
			ps.setString(8, emp.getCountryName());
			ps.setInt(9, emp.getPinCode());
			ps.setInt(10, emp.getContactNo());
			ps.setString(11, emp.getMailId());
			ps.setString(12, emp.getSecurityQues());
			ps.setString(13, emp.getSecurityQuesId());
			ps.setString(14, emp.getSecurityQuesAns());
			ps.setDate(15, (java.sql.Date) emp.getRegDate());
			ps.setString(16, emp.getPassword());
			ps.setInt(17, emp.getTypeId());
			
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
