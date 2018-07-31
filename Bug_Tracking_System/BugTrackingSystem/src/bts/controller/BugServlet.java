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

import bts.bo.Bugs;
import bts.dao.BugsDAO;

@WebServlet("/BugServlet")
public class BugServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	@Resource(name="oracledb")
	private DataSource dataSource;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		BugsDAO.dataSource = this.dataSource;
		List<Bugs> list =  BugsDAO.getAllBugs();
		
		//System.out.println(list);
		GsonBuilder gsonBuilder = new GsonBuilder();
		Gson gson = gsonBuilder.create();
		String jsonString = gson.toJson(list);
		response.getWriter().print(jsonString);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		BugsDAO.dataSource = this.dataSource;
		InputStreamReader reader = new InputStreamReader(request.getInputStream());//will read data char by char from request
		BufferedReader br= new BufferedReader(reader);
		String jsonString = br.readLine();
		System.out.println(jsonString);
		
		Gson gson=new Gson();
		Bugs bug = gson.fromJson(jsonString, Bugs.class);
		
		int i = BugsDAO.raiseBug(bug);
		if(i>0) {
			System.out.println("added");
			response.getWriter().write(bug.getBug_id());
		}else {
			response.getWriter().write("-1");
		}
	}
	
	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		InputStreamReader reader = new InputStreamReader(req.getInputStream());//will read data char by char from request
		BufferedReader br= new BufferedReader(reader);
		//System.out.println("Put request received");
		String jsonstr = br.readLine();
		Gson gson = new Gson();
		Bugs bug= gson.fromJson(jsonstr, Bugs.class);
		System.out.println(bug);
		
		BugsDAO.dataSource = this.dataSource;
		int res = BugsDAO.assignBug(bug);
		
		String jstr = "{updatesucess: 'ok',result : "+res+"}";
		
		resp.getWriter().print(gson.toJson(jstr));
			
	}

}
