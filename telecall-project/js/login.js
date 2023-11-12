document.querySelector("#ebtn").addEventListener("click", function Verificar(){
event.preventDefault();
		
		const alerta = document.querySelector("#alertdiv");

		const EnterName = document.querySelector("#usuario").value;
		
		const EnterPass = document.querySelector("#pass").value;
		
		let getName = localStorage.getItem("UserName");
		let getPass = localStorage.getItem("UserPass");
		
		if (EnterName == getName && EnterPass == getPass) {
				alerta.style.color = "green";
				alerta.innerText = "Login Realizado!"
				setTimeout(()=>{
						console.log("carregando...");
				},4000);
				window.location.href = "landingpage.html";
		}
		else {
				alerta.style.color = "red";
				alerta.innerText = "nome de usuário ou senha inválidos";
				return;
		}
});

function maiuscula(x) {
  x.value = x.value.toUpperCase();
}