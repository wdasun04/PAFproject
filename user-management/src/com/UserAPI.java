package com;

import java.io.IOException;  
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

/**
 * Servlet implementation class ItemsAPI
 */
@WebServlet("/UserAPI")
public class UserAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	User obj = new User();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

    private static Map getParasMap(HttpServletRequest request)
    {
    	Map<String, String> map = new HashMap<String, String>();
	    try
	     {
		     Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
		     String queryString = scanner.hasNext() ?
		     scanner.useDelimiter("\\A").next() : "";
		     scanner.close();
		     String[] params = queryString.split("&");
	     for (String param : params)
	     { 
		    String[] p = param.split("=");
		     map.put(p[0], p[1]);
	     }
	     }
	    catch (Exception e)
	     {
     }
    return map;
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		 String output = obj.insertUser(
			 request.getParameter("userfirstName"),
			 request.getParameter("userlastName"),
			 request.getParameter("address"), 
			 request.getParameter("contactNumber"),
			 request.getParameter("email"),
		     request.getParameter("gender"),
		     request.getParameter("password"),
		     request.getParameter("type"));
			 response.getWriter().write(output);
	}


	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			 throws ServletException, IOException
			{
			 Map paras = getParasMap(request);
			 
			 String output = obj.updateUser(paras.get("hiduserIDSave").toString(),  
			 paras.get("userfirstName").toString(),
			 paras.get("userlastName").toString(),
			 paras.get("address").toString(),
			 paras.get("contactNumber").toString(),
			 paras.get("email").toString(),
			 paras.get("gender").toString(),
			 paras.get("password").toString(),
			 paras.get("type").toString());
			 response.getWriter().write(output);
			}
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			 throws ServletException, IOException
	{
			 Map paras = getParasMap(request);
			 
			 String output = obj.deleteUser(paras.get("userID").toString());
			 response.getWriter().write(output);
			}

}
