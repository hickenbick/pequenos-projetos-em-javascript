// gerando numero aleatório
let numeroAleatorio = Math.floor(Math.random() * 100);
// declarando elementos da lista
let palpites = document.querySelector(".palpites");
let ultimoResultado = document.querySelector(".ultimoResultado");
let baixoOuAlto = document.querySelector(".baixoOuAlto");
// declarando elementos do input
let container = document.querySelector('.container')
let resultado = document.querySelector('.resultadoParas')
let form = document.querySelector(".form");
let campoPalpite = document.querySelector(".campoPalpite");
let botaoPalpite = document.querySelector(".botaoPalpite");
// declarando contagem de palpites e reinicio
let contagemPalpites = 1;
let botaoReinicio;

// mostra no console o número secreto
console.log("Número Aleatório: " + numeroAleatorio);

// funções lógicas executadas ao submeter números
function conferirPalpite() {
  let palpiteUsuario = Number(campoPalpite.value);
  if (contagemPalpites === 1) {
    palpites.textContent += "Palpites anteriores: ";
  }
  palpites.textContent += palpiteUsuario + " ";

  if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = "Parabéns! Você venceu!";
    ultimoResultado.style.color = "green";
    baixoOuAlto.style.display = "none";
    fimDeJogo();
  }

  if (contagemPalpites === 10) {
    ultimoResultado.textContent = "Ah não! Você perdeu.";
    ultimoResultado.style.color = "red";
    baixoOuAlto.style.display = "none";
    fimDeJogo();
  }

  if (palpiteUsuario > numeroAleatorio) {
    baixoOuAlto.textContent = "Seu número é maior que o número secreto.";
  }
  if (palpiteUsuario < numeroAleatorio) {
    baixoOuAlto.textContent = "Seu número é menor que o número secreto.";
  }
  contagemPalpites++;
  campoPalpite.value = "";
  campoPalpite.focus();
}
// event listener para enviar palpite
botaoPalpite.addEventListener("click", conferirPalpite);

// bloqueia o jogo ao final e cria um botão para reiniciar
function fimDeJogo() {
  let jogarNovamente = document.createElement("button");
  container.appendChild(jogarNovamente);
  jogarNovamente.innerText = "Jogar Novamente?";
  jogarNovamente.classList.add("btn");

  baixoOuAlto.style.display = "none";
  palpites.style.display = "none";
  form.style.display = "none";
  

  jogarNovamente.addEventListener("click", reiniciarJogo);
}

// refresh na página caso o jogador queira reiniciar
function reiniciarJogo() {
  location.reload();
}
