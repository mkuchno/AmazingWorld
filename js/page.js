
$(document).ready(function(){

	//go to the top of the page at start
	$("html,body").scrollTop(0);

	//hide all except main content
	$("#con2").hide();
	$("#page2").css("color","#87CEEB");

	$("#con3").hide();
	$("#page3").css("color","#87CEEB");

	var prevColor;
	var clicked = false;

	//hover
	$("#page1, #page2, #page3").hover(

		function() {

			//make sure to remember previous color
			prevColor = $(this).css("color");

			$(this).css("color","#191970");

		}, function() {

			//make sure hover and active are not in conflict
			if(!clicked){

				$(this).css("color", prevColor);
			
			}else{

				$(this).css("color", "white");
				clicked = false;
			}
  		}
	);

	//main content navigation
	$("#page1").click(function(){

		clicked = true;

		$("#con1").show();
		$("#page1").css("color","white");

		$("#con2").hide();
		$("#page2").css("color","#87CEEB");

		$("#con3").hide();
		$("#page3").css("color","#87CEEB");

		//go to top of the page
		$("html,body").scrollTop(0);

		//show active element of scrollspy after reload content
		setActive();

		//hide elements if user use it earlier
		$("#s1-more").collapse('hide');
		$("#s2-more").collapse('hide');
		$("#s3-more").collapse('hide');

	});

	//second content navigation
	$("#page2").click(function(){

		clicked = true;

		$("#con1").hide();
		$("#page1").css("color","#87CEEB");

		$("#con2").show();
		$("#page2").css("color","white");

		$("#con3").hide();
		$("#page3").css("color","#87CEEB");

		//go to top of the page
		$("html,body").scrollTop(0);

		//clear contact form after content reload
		$("#contact").closest("form").find("input[type=text], textarea").val("");
		$("#contact").closest("form").find("input[type=email], input").val("");
		$("#checkbox1").prop("checked", false);
		$("textarea").height("100%");

	});

	//third content navigation
	$("#page3").click(function(){

		clicked = true;

		$("#con1").hide();
		$("#page1").css("color","#87CEEB");

		$("#con2").hide();
		$("#page2").css("color","#87CEEB");

		$("#con3").show();
		$("#page3").css("color","white");

		//go to top of the page
		$("html,body").scrollTop(0);

	});

	//donate button click listener
	$("#donate-btn").click(function() {

		alert("Sorry! We don't have a donation system yet.");

	});

});

//set active on first element
function setActive(){

	$("#main-pointer").addClass("active");

	$("#pointer2").removeClass("active");
	$("#pointer3").removeClass("active");

}