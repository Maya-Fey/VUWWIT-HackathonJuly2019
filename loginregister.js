var username;
var pass;
var loginactive = true;

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
		window.location.href = "/index.html";
	} else {
		alert("Login Failed: " + message);
	}
}

function onRegister()
{
	var usernam = document.getElementById("username-reg").value;
	var pas = document.getElementById("password-reg").value;
	var age = document.getElementById("age").value;
	var gender = document.getElementById("gender").value;
	var uni = document.getElementById("university").value;
	var degree = document.getElementById("degree").value;
	var major = document.getElementById("major").value;
	var year = document.getElementById("year").value;
	
	register(usernam, pas, age, gender, uni, year, degree, major, onRegistrationReturn);
}

function onRegistrationReturn(success, message)
{
	if(success) { 
		alert("Regisration Succeeded")
	} else {
		alert("Registration Failed: " + message);
	}
}

function updateSelect()
{
	if(loginactive)
	{
		document.getElementById("login").setAttribute("style", "");
		document.getElementById("register").setAttribute("style", "display: none;");
		document.getElementById("loginbutton").setAttribute("style", "background-color: rgb(7, 59, 16);");
		document.getElementById("registerbutton").setAttribute("style", "");
	} else {
		document.getElementById("login").setAttribute("style", "display: none;");
		document.getElementById("register").setAttribute("style", "");
		document.getElementById("loginbutton").setAttribute("style", "");
		document.getElementById("registerbutton").setAttribute("style", "background-color: rgb(7, 59, 16);");
	}
}

function setLoginActive(active)
{
	loginactive = active;
	updateSelect();
}