var username;
var pass;

function onLogin()
{
	username = document.getElementById("username").value;
	pass = document.getElementById("password").value;
	
	login(username, pass, onLoginReturn);
}

function onLoginReturn(success, message)
{
	if(success) { 
		alert("Login Succeeded")
		assignLoginCookies(username, pass);
	} else {
		alert("Login Failed: " + message);
	}
}