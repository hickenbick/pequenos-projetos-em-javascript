let seuVotoPara = document.querySelector(".d-1-1 span");
let numeros = document.querySelector(".d-1-3");
let cargo = document.querySelector(".d-1-2");
let descricao = document.querySelector(".d-1-4");
let aviso = document.querySelector(".d-2");
let lateral = document.querySelectorAll(".d-1-right");

let etapaAtual = 0;
let numero = "";

function comecarEtapa() {
  let etapa = etapas[etapaAtual];

  let numeroHtml = "";

  for (let i = 0; i < etapa.numeros; i++) {
    if (i === 0) {
      numeroHtml += '<div class="n pisca"></div>';
    } else {
      numeroHtml += '<div class="n"></div>';
    }
  }
  seuVotoPara.innerHTML = "";
  descricao.innerHTML = "";
  aviso.innerHTML = "";
  lateral.innerHTML = "";
  numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
  let etapa = etapas[etapaAtual];
  let candidato = etapa.candidato.filter((item) => {
    if (item.numero === numero) {
      return true;
    } else {
      return false;
    }
  });
  console.log(candidato)
}

function clicou(n) {
  let elNumero = document.querySelector(".n.pisca");
  if (elNumero !== null) {
    elNumero.innerHTML = n;
    numero += n;
    elNumero.classList.remove("pisca");
    if (elNumero.nextElementSibling !== null) {
      elNumero.nextElementSibling.classList.add("pisca");
    } else {
      atualizaInterface();
    }
  }
}

comecarEtapa();
