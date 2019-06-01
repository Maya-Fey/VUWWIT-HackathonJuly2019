function getCookie(cname) 
{
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(name, value)
{
	document.cookie = name + "=" + value + ";";
}

function isLoggedIn()
{
	return getCookie("loggedin") == "yes";
}

function getUser()
{
	return getCookie("user");
}

function getPassword()
{
	return getCookie("pass");
}

function assignLoginCookies(user, pass)
{
	setCookie("loggedin", "yes");
	setCookie("user", user);
	setCookie("pass", pass);
}