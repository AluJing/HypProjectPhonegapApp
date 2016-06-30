$(document).ready(function(){
        $.get("http://jingalmera.altervista.org/tvsmartlivingFetch.php",  function(data, status){
    
		document.getElementById("devicesElement").innerHTML = data;
        });
	});