$(document).ready(function(){
        $.get("http://jingalmera.altervista.org/tabletFetch.php", 
                 function(data, status){
    
		document.getElementById("devicesElement").innerHTML = data;
        });
	});