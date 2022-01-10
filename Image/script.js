var images = [ "img1.jpg",
               "img2.jpg",
               "img3.jpg"
                   ];

var i=0; // 1

function slides() {
	document.getElementById("slideimage") .src = images[i];
	if (i<(images.length-1)) // 4<4 
		i++;
	   else
	   i=0;	

}

setInterval(slides, 1000);

var i=0;
var col=new Array("red","green","yellow","orange","blue","skyblue");

function change() 
{
	document.body.style.backgroundColor=col[i];
	i++;
	if (i>col.length)
	{
		i=0;
	}
	window.setTimeout(change, 1000);
}
window.onload=change();