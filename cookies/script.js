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
			window.location = "main.html";
		}
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