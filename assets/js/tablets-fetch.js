$(document).ready(function(){
        $.get("http://jingalmera.altervista.org/tabletFetch.php", 
                { categoria: "tablet" }, function(data, status){
    
		document.getElementById("devicesElement").innerHTML = data;
        });
	});