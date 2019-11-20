function musicToggle() {
	var toggle = document.getElementById("toggle");
	var music = document.getElementById("music");
	if (toggle.checked == true) {
		music.play();
	}
	else {
		music.pause();
	}
}

function showPassword() {
	var password = document.getElementById("password");
	var createPassword = document.getElementById("createPassword");
	if (password.type === "password") {
		 password.type = "text";
	}
	else {
		password.type = "password";
	}
	if (createPassword.type === "password") {
		 createPassword.type = "text";
	}
	else {
		createPassword.type = "password";
	}
}

function hideAllElementsExceptLogin() {
document.getElementById("gameCanvas").style.display = "none";
document.getElementById("counterBox").style.display = "none";
document.getElementById("sidebar").style.display = "none";
document.getElementById("gameOver").style.display = "none";
document.getElementById("start").style.display = "none";
document.getElementById("instructions").style.display = "none";
document.getElementById("createAccountBox").style.display = "none";
}


function hideButtonShowGame() {
	document.getElementById("start").style.display = "none";
  document.getElementById("createAccountBox").style.display = "none";
	document.getElementById("gameCanvas").style.display = "block";
	document.getElementById("counterBox").style.display = "block";
	document.getElementById("sidebar").style.display = "block";
}

function hideCanvasShowGameOver() {
	document.getElementById("gameOver").style.display = "block";
	document.getElementById("counterBox").style.display = "none";
	document.getElementById("gameCanvas").style.display = "none";
}

function hideBoxesShowPlay() {
  document.getElementById("instructions").style.display = "block";
  document.getElementById("start").style.display = "block";
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("createAccountBox").style.display = "none";
}

function hideLoginCreateAccount() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("createAccountBox").style.display = "block";
}

function hideCreateAccountLogin() {
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("createAccountBox").style.display = "none";
}
