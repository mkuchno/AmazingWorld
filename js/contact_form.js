
$(document).ready(function(){

	//clear form, after sending
	$("#contact").submit(function(){

		$("#contact").closest("form").find("input[type=text], textarea").val("");
		$("#contact").closest("form").find("input[type=email], input").val("");
		$("#checkbox1").prop("checked", false);
		$("textarea").height("100%");

		//show message
		alert("Submitted");

		//do not reload page after submit
		return false;

	});
	
});


