$(document).ready(function(){
        $.get("http://jingalmera.altervista.org/website/outletFetch.php", 
                { offerta: "1" }, function(data, status){
    
		document.getElementById("devicesElement").innerHTML = data;
        });
	});
