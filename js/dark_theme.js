
var clicked = false;

$(document).ready(function(){
	
	$("#dark-theme").click(function() {

		setTheme();

	});
	
});

//change font, background color and button style
function setTheme(){

	if(!clicked){

		$("body").css("background-color","black");
		$("body").css("color","#DCDCDC");

		$("#dark-theme").removeClass("btn-light").addClass("btn-dark");

		clicked = true;

	}else{	

		$("body").css("background-color","white");
		$("body").css("color","black");

		$("#dark-theme").removeClass("btn-dark").addClass("btn-light");

		clicked = false;
	}

}


