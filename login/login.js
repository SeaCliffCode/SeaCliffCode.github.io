var allowedUsers =["adam", "bob", "chris"];

function myFunction(){
	var user = document.getElementById("user").value;
	user = user.toLowerCase();

	if(allowedUsers.indexOf(user)!= -1){
		alert("You are allowed!");
		window.location.href="../homepage.html";
	}

	else
	{
		alert("Invalid Credentials");
	}

}