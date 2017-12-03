var allowedUsers =["adam", "bob", "chris"];

function myFunction(){
	var user = document.getElementById("user").value;
	user = user.toLowerCase();

	if(allowedUsers.indexOf(user)!= -1){
		alert("You are allowed!");
		window.location.href="http://www.google.com";
	}

	else
	{
		alert("Invalid Credentials");
	}

}