let login = document.querySelector('.login'),
	 password = document.querySelector('.pass'),
	 btn = document.querySelector('.btn');

let getLogin, getPass;
btn.addEventListener("click", () => {
	getLogin = login.value;   
	getPass = password.value;

	alert( "Login: "  + getLogin +  "\n" +  "Password: "  +  getPass);

});

