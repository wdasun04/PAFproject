<%@page import="com.User"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Items Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/user.js"></script>
</head>
<body>

<div class="container"><div class="row"><div class="col-10">
<h1>User Details </h1>
<form id ='userForm' name = 'userForm' method = 'POST' action = 'user.jsp'>

  
 First Name:
 <input id="userfirstName" name="userfirstName" type="text" class="form-control form-control-sm">
 
 <br> Last Name:
 <input id="userlastName" name="userlastName" type="text" class="form-control form-control-sm">
 
 <br> Address:
 <input id="address" name="address" type="text" class="form-control form-control-sm">
 
 <br> Contact Number:
 <input id="contactNumber" name="contactNumber" type="text" class="form-control form-control-sm">
 
 <br> Email:
 <input id="email" name="email" type="text" class="form-control form-control-sm">
 
 <!-- GENDER -->
<br><div class="input-group input-group-sm mb-3">
<div class="input-group-prepend">
 <span class="input-group-text" id="lblName">Gender: </span>
</div>
&nbsp;&nbsp;Male
<input type="radio" id="rdoGenderMale" name="rdoGender" value="Male">
&nbsp;&nbsp;Female
 <input type="radio" id="rdoGenderFemale" name="rdoGender" value="Female">
 </div>
 
 Password:
 <input id="password" name="password" type="text" class="form-control form-control-sm">
 
 <!-- YEAR -->
<br><div class="input-group input-group-sm mb-3">
<div class="input-group-prepend">
 <span class="input-group-text" id="lblName">User Type: </span>
</div>
<select id="ddlYear" name="ddlYear">
 <option value="0">--Select User Type--</option>
 <option value="1">Admin</option>
 <option value="2">Researcher</option>
 <option value="3">Buyer</option>
 
</select>
</div>
 
 
 <br>
 <input id="btnSave" name="btnSave" type="button" value="Save"
 class="btn btn-primary">
 <input type="hidden" id="hidItemIDSave"
 name="hidItemIDSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divItemsGrid">
 <%
 User userObj = new User();
 out.print(userObj.readUsers());
 %>
</div>
</div> </div> </div>
</body>
</html>