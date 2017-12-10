function calcArea() {
	var select = document.getElementById("select").value; //Gets value of dropdown selector
	var base = document.getElementById("base").value;
	var height = document.getElementById("height").value;
	var emptyParagraph = document.getElementById("empty");
	var unit = "";



//Using the radio buttons for getting units
	var units = document.getElementsByName("units");

	for (i = 0; i < units.length; i++) {
	    if (units[i].checked) {
	        unit = " " + units[i].value;
	    }
	}


	
	
	if (select == 1) {
		area = 0.5 * base * height;
	

		emptyParagraph.innerText = "The area of a triangle with base: " + String(base) + 
		" and height: " + String(height) + " is " + String(area) + unit;

	}


	if (select== 2) {
		area = base * height;

		emptyParagraph.innerText = "The area of a triangle with base: " + String(base) + 
		" and height: " + String(height) + " is " + String(area) + unit;
	}

}




//if we wanted to include circles

// onchange="changeFunc(value);"

// function changeFunc($i){
// 	alert($i);
// 	if($i == 3){
// 		document.getElementById("height").disabled="disabled";
// 		document.getElementById("base").disabled="disabled";
// 		document.getElementById("radius").disabled="";
// 	}
// }