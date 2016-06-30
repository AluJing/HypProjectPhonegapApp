$(document).ready(function(){
        $.get("http://jingalmera.altervista.org/smartphoneFetch.php", function(data, status){
    
		document.getElementById("devicesElement").innerHTML = data;
        });
	});