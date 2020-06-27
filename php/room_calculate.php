<?php
	
	//calculate number of heaters
	$volume = $_REQUEST["volume"];
	$heaters = round($volume/20);
	echo $heaters;

?>