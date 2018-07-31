package bts.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import bts.bo.Managers;
import bts.dao.ManagersDAO;


@WebServlet("/ManagerServlet")
public class ManagerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	@Resource(name="oracledb")
	private DataSource dataSource;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ManagersDAO.dataSource = this.dataSource;
		List<Managers> list =  ManagersDAO.getAllManagers();
		
		//System.out.println(list);
		GsonBuilder gsonBuilder = new GsonBuilder();
		Gson gson = gsonBuilder.create();
		String jsonString = gson.toJson(list);
		response.getWriter().print(jsonString);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ManagersDAO.dataSource = this.dataSource;
		InputStreamReader reader = new InputStreamReader(request.getInputStream());//will read data char by char from request
		BufferedReader br= new BufferedReader(reader);
		String jsonString = br.readLine();
		System.out.println(jsonString);
		
		Gson gson=new Gson();
		Managers manager = gson.fromJson(jsonString, Managers.class);
		
		int i = ManagersDAO.insertManager(manager);
		if(i>0) {
			System.out.println("added");
			response.getWriter().write(manager.getManager_id());
		}else {
			response.getWriter().write("-1");
		}
	}

}
