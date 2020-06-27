
$(document).ready(function(){

	//hover
	$("#page1").hover(

		function() {

			$(this).css("color","#191970");

		}, function() {

			$(this).css("color", "#87CEEB");
  		}

	);

	//read value from first custom range and show it
	$("#radius-ran").on("input", function(){

		//get the values
		var val = $(this).val();

		//show the values
		$("#radius-val").text(val);

	});

	//read value from second custom range and show it
	$("#height-ran").on("input", function(){

		//get the values
		var val = $(this).val();

		//show the values
		$("#height-val").text(val);

	});

	//submit button listener, calculate and show result in alert
	$("#con-form").submit(function(){

		var radius = parseInt( $("#radius-val").text() );
		var height = parseInt( $("#height-val").text() );

		if(height != 0){

			var help = Math.sqrt((height * height) + (radius * radius));

		}else{

			var help = 0;
		}

		var area = (Math.PI * radius * radius) + (Math.PI * radius * help);
		var volume = (1/3) * (Math.PI * radius * radius) * 	height;

		//show message
		alert("Total surface: " + Math.round(area) + "\nVolume: " + Math.round(volume));

		//do not reload page after submit
		return false;

	});

});