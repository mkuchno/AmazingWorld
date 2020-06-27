
$(document).ready(function(){

	//submit button listener, calculate room air volume
	$("#room-form").submit(function(){

		var length = parseInt( $("#len").text() );
		var width = parseInt( $("#wid").text() );
		var height = parseInt( $("#hei").text() );

		var volume = length * width * height;

		//ajax script
		//send volume value to room_calculate.php
		//after calculation get number of heaters and show it
		$.ajax({

			type: "GET",

			url: "php/room_calculate.php",

			data: "volume=" + volume,

			cache: false,

			success: function(html){

				alert("Heaters in room: " + html);
			}

		});

		//do not reload page after submit
		return false;

	});

	//hover
	$("#page1").hover(

		function() {

			$(this).css("color","#191970");

		}, function() {

			$(this).css("color", "#87CEEB");
  		}

	);

	//read value from first custom range and show it
	$("#length").on("input", function(){

		//get the values
		var val = $(this).val();

		//show the values
		$("#len").text(val);

	});

	//read value from second custom range and show it
	$("#width").on("input", function(){

		//get the values
		var val = $(this).val();

		//show the values
		$("#wid").text(val);

	});

	//read value from third custom range and show it
	$("#height").on("input", function(){

		//get the values
		var val = $(this).val();

		//show the values
		$("#hei").text(val);

	});

});