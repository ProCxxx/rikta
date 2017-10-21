var i=1;
function a(){
setInterval(function(){ 

	var c=document.getElementById("canv");
	var ctx=c.getContext("2d");
	c.width=961;
	c.height=1281;
	
	var img = document.getElementById("img");
	
	var x = "img/img"+i+".jpg";
	img.src="img/img"+i+".jpg";
	ctx.drawImage(img, 0,0, c.width, c.height);
	console.log(x+" "+i);
	i=Math.floor(Math.random()*47 +1);
	//i++;
	//if(i>48){i=1;}
},1000);
}
