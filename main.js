var i=1;
function a(){
setInterval(function(){ 

	var c=document.getElementById("canv");
	var ctx=c.getContext("2d");
	c.width=960;
	c.height=1280;
	
	var img = document.getElementById("img");
	
	img.src="img/img"+i+".jpg";
	ctx.drawImage(img, 0,0, c.width, c.height);
	i=Math.floor(Math.random()*48 +1);
},1000);
}
