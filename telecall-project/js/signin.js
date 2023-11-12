

document.querySelector("#sbtn").addEventListener("click", function Cadastro() {
  // Código não nescessario, mas verifica se evento inicia.
  event.preventDefault();

  localStorage.removeItem("submitstart");
  localStorage.setItem("submitstart", "evento iniciado!");
  const message = localStorage.getItem("submitstart");
  console.log(message);

  // Começo do código
  const alerta = document.querySelector("#alertdiv");
		
  const nomeVal = document.querySelector("#nome").value;
  // Rejeita var vazia
  if (nomeVal == ""){
  	 alerta.style.color = "red"
    alerta.innerText = "Insira seu nome.";
    window.location.href = "#nome";
    return;
  }
  // Rejeita var menor que 15
  if (nomeVal.length < 15 ){
  		alerta.style.color = "red";
  		alerta.innerText = "Nome deve conter entre 15 e 60 caracteres";
    window.location.href = "#nome";
  		return;
  }
  
  
  const dataVal = document.querySelector("#data").value;
  // Rejeita var vazia
  if (dataVal == ""){
  	 alerta.style.color = "red"
    alerta.innerText = "Insira seu data de nascimento.";
    window.location.href = "#data";
    return;
  }
  
  
  const nomemaeVal = document.querySelector("#nomemae").value;
  // Rejeita var vazia
  if (nomemaeVal == ""){
  	 alerta.style.color = "red"
    alerta.innerText = "Insira o nome da sua mãe.";
    window.location.href = "#nomemae";
    return;
  }
  // Rejeita var menor 15
  if (nomemaeVal.length < 15 ){
  		alerta.style.color = "red";
  		alerta.innerText = "Nome da mãe deve conter entre 15 e 60 caracteres";
    window.location.href = "#nomemae";
  		return;
  }
  
  const CPFVal = document.querySelector("#CPF").value;
  if (CPFVal == ""){
  	 alerta.style.color = "red"
    alerta.innerText = "Insira seu CPF.";
    window.location.href = "#CPF";
    return;
  }
  
  if (CPFVal.length < 14 || CPFVal.length > 14) {
  		alerta.style.color = "red"
    alerta.innerText = "Insira um CPF Válido!";
    window.location.href = "#CPF";
    return;
  }
  const telefoneVal = document.querySelector("#telefone").value;
  if (telefoneVal == ""){
  	 alerta.style.color = "red"
    alerta.innerText = "Insira seu telefone.";
    window.location.href = "#telefone";
    return;
  }
  
  if (telefoneVal.length < 14 || telefoneVal.length > 14) {
  		alerta.style.color = "red"
    alerta.innerText = "Formato de telefone inválido! (XX) XXXX-XXXX";
    window.location.href = "#telefone";
    return;
  }

  const optionsexo = document.querySelectorAll(".radioinput");
  let sexoVal = "";
  for (let i = 0; i < optionsexo.length; i++) {
    if (optionsexo[i].checked) {
      sexoVal = optionsexo[i].value;
      console.log(sexoVal);      
    }
  }

  if (sexoVal === "") {
    alerta.style.color = "red";
    alerta.innerText = "Por favor, selecione um gênero.";
    window.location.href = "#radio";
    return;
  }

  const endereçoVal = document.querySelector("#endereço").value;
  if (endereçoVal == ""){
  	 alerta.style.color = "red"
    alerta.innerText = "Insira seu endereço.";
    window.location.href = "#endereço";
    return;
  }
 const usuarioVal = document.querySelector("#usuario").value;
  if (usuarioVal === "" || !/[a-zA-Z]{6,}/.test(usuarioVal)) {
  alerta.style.color = "red";
  alerta.innerText = "Insira um nome de usuário com pelo menos 6 caracteres alfabéticos.";
  window.location.href = "#usuario";
  return;
}

  
  
  
  const PassVal = document.querySelector("#pass").value;
  if (PassVal == ""){
  	 alerta.style.color = "red"
    alerta.innerText = "Insira uma senha.";
    window.location.href = "#pass";
    return;
  }
  
  const ConfirmVal = document.querySelector("#confirm").value;

  if (PassVal != ConfirmVal) {
    alerta.style.color = "red";
    alerta.innerText = "Os campos de senha devem ser iguais";
    return;
  }
  if (PassVal.length < 8) {
  		alerta.style.color = "red"
    alerta.innerText = "Senha deve conter ao mínimo 8 caracteres.";
    window.location.href = "#pass";
    return;
  }

  localStorage.setItem("UserName",usuarioVal);
  localStorage.setItem("UserPass",PassVal);
  window.location.href = "login.html";
    
});



function maiuscula(x) {
  x.value = x.value.toUpperCase();
}

function ajustaCpf(v) {
  v.value = v.value.replace(/\D/g, "");
  //Adiciona ponto após os três primeiros números
  v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
  //Adiciona ponto após os seis primeiros números
  v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
  //Adiciona o hífen antes dos últimos 2 caracteres
  v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function ajustaNumeros(v) {
  // Remove os caracteres não numéricos
  v.value = v.value.replace(/\D/g, "");
}

function ajustaTelefone(v) {
  v.value = v.value.replace(/\D/g, "");
  //Adiciona parênteses no DDD
  v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
  //Adiciona hífen no número do telefone
  v.value = v.value.replace(/(\d{4})(\d)/, "$1-$2");
}

// limite nome 60 caracteres
const nome2 = document.querySelector("#nome");
nome2.addEventListener("input", function(){
		if (nome2.value.length > 60){
				nome2.value = nome2.value.slice(0,60);
		}
});


const nomemae2 = document.querySelector("#nomemae");
nomemae2.addEventListener("input", function(){
		if (nomemae2.value.length > 60){
				nomemae2.value = nomemae2.value.slice(0,60);
		}
});










