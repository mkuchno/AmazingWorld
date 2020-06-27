
$(document).ready(function(){

	var old_val = parseInt("500px");

	//reset value of custom range before open gallery section
	//and reset size of gallery to default
	$("#page3").click(function() {

		$(".carousel").css({"width": old_val, "height": old_val});
	    $(".gal-img").css("height", old_val);

		$("#my-slider").val(0).slider("refresh");

	});

	//set size of gallery based on custom range value
	$(".custom-range").on("input", function(){

		//get the new values
		var val = parseInt("500px") + parseInt($(this).val() + "px", 10);

		//set the new values in gallery
	    $(".carousel").css({"width": val, "height": val});
	    $(".gal-img").css("height", val);

	    //clear variable
	    val = 0;

	 });
	
});


