var par = document.getElementById("main");

// when the mouse is over the area, show the corresponded travel photos
function displayPic(objId){
	var myImg = document.createElement("img");
	myImg.id = ".img";
	myImg.src = "travel/" + objId + ".jpg";
	if(objId === "yn") {
			myImg.style.position = "absolute";
			myImg.style.top = "40%";
			myImg.style.left = "0%";		
	}
	else {
			myImg.style.position = "absolute";
			myImg.style.top = "40%";
			myImg.style.left = "65%";		
	}
	
 	par.appendChild(myImg);
}

// when the mouse is out of the area, hide the corresponded travel photos
function nonePic(objId){
	var obj = document.getElementById(".img");
	if(obj != null){
		obj.innerHTML = "";
		par.removeChild(obj);
	}  
}