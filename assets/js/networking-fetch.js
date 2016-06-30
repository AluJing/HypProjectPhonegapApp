$(document).ready(function(){
        $.get("http://jingalmera.altervista.org/networkingFetch.php", 
                { categoria: "networking" }, function(data, status){
    
		document.getElementById("devicesElement").innerHTML = data;
        });
	});