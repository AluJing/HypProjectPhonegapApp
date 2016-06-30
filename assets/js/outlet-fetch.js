$(document).ready(function(){
        $.get("http://jingalmera.altervista.org/outletFetch.php",  function(data, status){
    
		document.getElementById("devicesElement").innerHTML = data;
        });
	});