let seuVotoPara = document.querySelector(".text-1 span");
let cargo = document.querySelector(".text-2 span");
let descricao = document.querySelector(".text-4");
let aviso = document.querySelector(".div-2");
let lateral = document.querySelector(".div-1--right");
let numeros = document.querySelector(".text-3");

let etapaAtual = 0;
let numero = "";

function comecarEtapa() {
  let etapa = etapas[etapaAtual];

  let numeroHtml = "";

  for (let i = 0; i < etapa.numbers; i++) {
    if (i === 0) {
      numeroHtml += '<div class="number blink"></div>';
    } else {
      numeroHtml += '<div class="number"></div>';
    }
  }

  seuVotoPara.style.display = "none";
  cargo.innerHTML = etapa.title;
  descricao.innerHTML = "";
  aviso.style.display = "none";
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
  if (candidato.length > 0) {
    candidato = candidato[0];
    seuVotoPara.style.display = "block";
    aviso.style.display = "block";
    descricao.innerHTML = `Nome: ${candidato.nome}</br>Partido:${candidato.partido}`;

    let fotosHtml = "";
    for (let i in candidato.fotos) {
      fotosHtml +=
        `<div class="right-img">
        <img src="${candidato.fotos[i].url}" alt="">
        ${candidato.fotos[i].legenda}
        </div>`;
    }
    lateral.innerHTML = fotosHtml;
  }
}

function clicou(n) {
  let elNumero = document.querySelector(".number.blink");
  if (elNumero !== null) {
    elNumero.innerHTML = n;
    numero = `${numero}${n}`;

    elNumero.classList.remove("blink");
    if (elNumero.nextElementSibling !== null) {
      elNumero.nextElementSibling.classList.add("blink");
    } else {
      atualizaInterface();
    }
  }
}
function branco() {
  window.alert("Clicou em BRANCO");
}
function corrige() {
  window.alert("Clicou em CORRIGE");
}
function confirma() {
  window.alert("Clicou em CONFIRMA");
}
comecarEtapa();
