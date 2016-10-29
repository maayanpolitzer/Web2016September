var users = [
	{username:"maayan", password:"123"},
	{username:"moshe", password:"abc"},
	{username:"irit", password:"12ab"}
];

var username;
var password;
var checkbox;

function submit(){
	username = document.getElementById("username").value;
	password = document.getElementById("password").value;
	checkbox = document.getElementById("check").checked;
	if(validate()){
		login();
	}
}

function init(){
	var value = getCookie("USERNAME");
	var span = document.getElementById("username");
	span.innerHTML = value;
}

function login(){
	for(var i = 0; i < users.length; i++){
		if(username == users[i].username && password == users[i].password){
			setCookie("USERNAME", username, 365);
			setCookie("AUTO_LOGIN", checkbox, 365);
			window.location = "main.html";
		}
	}
}

function logout(){
	delCookie("USERNAME");
	delCookie("AUTO_LOGIN");
	window.location = "index.html";
}

function checkAutoLogin(){
	var checkBoxValue = getCookie("AUTO_LOGIN");	// get the AUTO_LOGIN cookie value.
	if(checkBoxValue == "true"){					// check if the cookie value == "true" (saved as a String).
		window.location = "main.html";				// if true -> move to main.html!
	}
}

function validate(){
	var valid = true;
	if(username == ""){
		valid = false;
	}
	if(password == ""){
		valid = false;
	}
	return valid;
}