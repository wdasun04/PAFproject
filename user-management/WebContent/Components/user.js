$(document).ready(function()
{
	if ($("#alertSuccess").text().trim() == "")
	 {
	 	$("#alertSuccess").hide();
	 }
	 	$("#alertError").hide();
	});
	// SAVE ============================================
	$(document).on("click", "#btnSave", function(event)
		{
		// Clear alerts---------------------
		 $("#alertSuccess").text("");
		 $("#alertSuccess").hide();
		 $("#alertError").text("");
		 $("#alertError").hide();
		// Form validation-------------------
		var status = validateItemForm();
		if (status != true)
		 {
		 $("#alertError").text(status);
		 $("#alertError").show();
		 return;
		 }
		// If valid------------------------
		var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT";
		 $.ajax(
		 {
		 url : "UserAPI",
		 type : type,
		 data : $("#userForm").serialize(),
		 dataType : "text",
		 complete : function(response, status)
		 {
		 onItemSaveComplete(response.responseText, status);
		 }
		 });
	
		function onItemSaveComplete(response, status)
	{
		if (status == "success")
		 {
		 	var resultSet = JSON.parse(response);
		 if (resultSet.status.trim() == "success")
		 {
			 $("#alertSuccess").text("Successfully saved.");
			 $("#alertSuccess").show();
			 $("#divItemsGrid").html(resultSet.data);
		 } else if (resultSet.status.trim() == "error")
		 {
			 $("#alertError").text(resultSet.data);
			 $("#alertError").show();
		 }
		 } else if (status == "error")
		 {
			 $("#alertError").text("Error while saving.");
			 $("#alertError").show();
		 } else
		 {
			 $("#alertError").text("Unknown error while saving..");
			 $("#alertError").show();
		 } 
	
	}
	
		});

	// UPDATE==========================================
	$(document).on("click", ".btnUpdate", function(event)
	{
	 $("#hidItemIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val());
	 $("#userID").val($(this).closest("tr").find('td:eq(0)').text());
	 $("#userfirstName").val($(this).closest("tr").find('td:eq(1)').text());
	 $("#userlastName").val($(this).closest("tr").find('td:eq(2)').text());
	 $("#address").val($(this).closest("tr").find('td:eq(3)').text());
	 $("#contactNumber").val($(this).closest("tr").find('td:eq(4)').text());
	 $("#email").val($(this).closest("tr").find('td:eq(5)').text());
     $("#gender").val($(this).closest("tr").find('td:eq(6)').text());
     $("#password").val($(this).closest("tr").find('td:eq(7)').text());
     $("#type").val($(this).closest("tr").find('td:eq(8)').text());
	});
// CLIENT-MODEL================================================================

	$(document).on("click", ".btnRemove", function(event)
	{
	 $.ajax(
	 {
	 url : "UserAPI",
	 type : "DELETE",
	 data : "formItem=" + $(this).data("userid"),
	 dataType : "text",
	 complete : function(response, status)
	 {
	 onItemDeleteComplete(response.responseText, status);
	 }
	 });

	function onItemDeleteComplete(response, status)
	{
		if (status == "success")
		 {
		 	var resultSet = JSON.parse(response);
		 if (resultSet.status.trim() == "success")
		 {
			 $("#alertSuccess").text("Successfully deleted.");
			 $("#alertSuccess").show();
			 $("#divItemsGrid").html(resultSet.data);
		 } else if (resultSet.status.trim() == "error")
		 {
			 $("#alertError").text(resultSet.data);
			 $("#alertError").show();
		 }
		 } else if (status == "error")
		 {
			 $("#alertError").text("Error while deleting.");
			 $("#alertError").show();
		 } else
		 {
			 $("#alertError").text("Unknown error while deleting..");
			 $("#alertError").show();
		 }
	}
	});
	function validateItemForm()
	{
		// FIRSTNAME
        if ($("#userfirstName").val().trim() == "")
          {
             return "Insert first name.";
          } 
		 
		// NAME
		if ($("#userlastName").val().trim() == "")
		 {
		 	return "Insert last name.";
		 } 
	
	     //ADDRESS
		 if ($("#address").val().trim() == "")
		 {
		 	return "Insert Address.";
		 } 
	
	     //CONTACT NUMBER
		 if ($("#contactNumber").val().trim() == "")
		 {
		 	return "Insert contact Number.";
		 } 
	
	    //CONTACT NUMBER
		 if ($("#email").val().trim() == "")
		 {
		 	return "Insert email.";
		 } 
	
	     // GENDER
         if ($('input[name="rdoGender"]:checked').length === 0)
         {
            return "Select gender.";
         } 

          //PASSWORD
		 if ($("#email").val().trim() == "")
		 {
		 	return "Insert password.";
		 } 

         // YEAR
         if ($("#ddlYear").val() == "0")
         {
            return "Select year.";
         }
            return true;
	
		 
}		
		
function getStudentCard(name, gender, type)
{
            var title = (gender == "Male") ? "Mr." : "Ms.";
            var typeNumber = "";
            switch (type) {
            case "1":
                    typeNumber = "Admin";
                    break;
            case "2":
                    typeNumber = "Researcher";
                    break;
            case "3":
                    typeNumber = "Buyer";
                    break;
             
 }
             var student = "";
             student += "<div class=\"student card bg-light m-2\"style=\"max-width: 10rem; float: left;\">";
             student += "<div class=\"card-body\">";
             student += title + " " + name + ",";
             student += "<br>";
             student += typeNumber + "type";
             student += "</div>";
             student += "<input type=\"button\" value=\"Remove\"class=\"btn btn-danger remove\">";
             student += "</div>";
             return student;

	
	}
