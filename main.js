var i=1;
function a(){
setInterval(function(){ 	
	var img = document.getElementById("img");
	img.src="img/img"+i+".jpg";
	i=Math.floor(Math.random()*47 +1);
},1000);
}
