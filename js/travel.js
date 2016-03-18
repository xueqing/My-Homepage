var par = document.getElementById("main");

function displayPic(objId){
	var myImg = document.createElement("img");
	myImg.id = ".img";
	myImg.src = "travel/"+objId+"0.jpg";
	if(objId==="yn") {
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

function nonePic(objId){
	var obj = document.getElementById(".img");
	if(obj != null){
		obj.innerHTML = "";
		par.removeChild(obj);
	}  
}