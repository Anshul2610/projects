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

import bts.bo.User;
import bts.dao.EmployeeDAO;
import com.google.gson.Gson;

import bts.bo.Employee;
import bts.dao.LoginDAO;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Resource(name="oracledb")
	private DataSource dataSource;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
/*		LoginDAO.dataSource=this.dataSource;
		String user=request.getParameter("mail_id");
		String password=request.getParameter("pass");
		String str=LoginDAO.check(user,password);
		
		GsonBuilder gsonbuilder=new GsonBuilder();
		Gson gson=gsonbuilder.create();
		String jsonString=gson.toJson(str);
		response.getWriter().print(jsonString);
*/	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
     	LoginDAO.dataSource=this.dataSource;
		InputStreamReader reader=new InputStreamReader(request.getInputStream());
		BufferedReader br=new BufferedReader(reader);
		String jsonString=br.readLine();
		System.out.println(jsonString);
		
		Gson gson = new Gson();
		Employee emp =  gson.fromJson(jsonString, Employee.class);
		System.out.println(emp);
		
		String user=emp.getMailId();
		String password=emp.getPassword();
		String str=LoginDAO.check(user,password);
		if(str.equals("success")) {
			response.getWriter().write(gson.toJson(emp));
		}
		

		//code to check this emp with db if userid and pass is valid 
		//if valid send this response to client
		
		
		
	}
}
	//	JSONObject jsonObject = new JSONObject(jsonString);
	//	int mail_id= jsonObject.getInt("mail_id");

		
	/*InputStreamReader reader=new InputStreamReader(request.getInputStream());
	BufferedReader br = new BufferedReader(reader);
	String jstr = br.readLine();
	
	System.out.println(jstr);
	Gson gson = new Gson();
	User u = gson.fromJson(jstr, User.class);
	
	if(u.type.equals("admin")) {
	EmployeeDAO.dataSource=this.dataSource;
	
	Employee emp = EmployeeDAO.check(u.);
	
	if(emp.getCity().equals(u.pass)) {
		System.out.println(arg0);
	}
}*/

