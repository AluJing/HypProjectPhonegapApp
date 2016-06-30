$(document).ready(function(){
        $.get("http://jingalmera.altervista.org/smartphoneFetch.php", 
                { categoria: "smartphones" }, function(data, status){
    
		document.getElementById("devicesElement").innerHTML = data;
        });
	});