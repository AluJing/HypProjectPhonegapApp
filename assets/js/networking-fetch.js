$(document).ready(function(){
        $.get("http://jingalmera.altervista.org/networkingFetch.php",  function(data, status){
    
		document.getElementById("devicesElement").innerHTML = data;
        });
	});