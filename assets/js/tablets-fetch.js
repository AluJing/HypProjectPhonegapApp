$(document).ready(function(){
        $.get("http://jingalmera.altervista.org/website/tabletFetch.php", 
                { categoria: "tablet" }, function(data, status){
    
		document.getElementById("devicesElement").innerHTML = data;
        });
	});
