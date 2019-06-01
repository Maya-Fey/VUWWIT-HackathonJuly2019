function apiCall(call, args, thenfunc)
{
	if(args != "")
		var call = $.get("http://avatarthelegendreturns.com:5002/" + call + "\\" + args);
	else
		var call = $.get("http://avatarthelegendreturns.com:5002/" + call);
	
	call.then(thenfunc);
}

/**
  * whendone=accept (boolean, string) boolean = true on success, string = error on fail
  */
function login(username, pass, whendone)
{
	apiCall("login", "user=" + username + "&password=" + pass, function(data) { 
		if(data == "Success")
		{
			whendone(true, "Success");
		} else {
			whendone(false, data);
		}
	});
}

/**
  * whendone=accept (boolean, string) boolean = true on success, string = error on fail
  */
function register(name, age, gender, uni, year, degree, major, whendone)
{
	apiCall("register", "name=" + name + "&age=" + age + "&gender=" + gender + "&uni=" + uni + "&year=" + year + "&degree=" + degree + "&major=" + major, function(data) {
		if(data == "Success")
		{
			whendone(true, "Success");
		} else {
			whendone(false, data);
		}
	});
}