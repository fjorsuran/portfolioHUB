function compartilhar() {
  alert("Link do projeto copiado para compartilhamento!");
}

function acessoNegado() {
  alert("Acesso negado. Este projeto é privado e exige permissão de administrador.");
}

function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const resultado = document.getElementById("resultado");

  if (usuario === "admin" && senha === "1234") {
    resultado.innerText = "Login realizado como Administrador. Permissão total concedida.";
    resultado.style.color = "green";
  } else if (usuario === "visitante") {
    resultado.innerText = "Login realizado como Visitante. Acesso apenas aos projetos públicos.";
    resultado.style.color = "blue";
  } else {
    resultado.innerText = "Usuário ou senha inválidos.";
    resultado.style.color = "red";
  }
}
