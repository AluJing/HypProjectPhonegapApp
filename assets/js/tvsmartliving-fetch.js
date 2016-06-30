$(document).ready(function(){
        $.get("http://jingalmera.altervista.org/tvsmartlivingFetch.php", 
                { categoria: "smartliving" }, function(data, status){
    
		document.getElementById("devicesElement").innerHTML = data;
        });
	});