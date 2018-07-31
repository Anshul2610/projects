package bts.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import com.google.gson.Gson;

import bts.bo.Employee;
import bts.dao.EmployeeDAO;

@WebServlet("/EmployeeServlet")
public class EmployeeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Resource(name="oracledb")
	private DataSource dataSource;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		EmployeeDAO.dataSource=this.dataSource;
		
		InputStreamReader reader=new InputStreamReader(request.getInputStream());
		BufferedReader br=new BufferedReader(reader);
		String jsonString =br.readLine();
		System.out.println(jsonString);
		
		Gson gson=new Gson();
		Employee emp=gson.fromJson(jsonString, Employee.class);
		
		int i=EmployeeDAO.registerEmployee(emp);
		if(i>0) {
			System.out.println("added");
			response.getWriter().write(emp.getEmpId());
		}
		else {
			System.out.println("Not added");
			response.getWriter().write("-1");
		}
	
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	}

}
