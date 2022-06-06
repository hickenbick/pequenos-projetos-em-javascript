let seuVotoPara = document.querySelector(".d-1-1 span");
let numeros = document.querySelector(".d-1-3");
let cargo = document.querySelector(".d-1-2");
let descricao = document.querySelector(".d-1-4");
let aviso = document.querySelector(".d-2");
let lateral = document.querySelector(".d-1-right");

let etapaAtual = 0;
let numero = "";
let votoBranco = false;

function comecarEtapa() {
  let etapa = etapas[etapaAtual];

  let numeroHtml = "";
  numero = "";
  votoBranco = false;

  for (let i = 0; i < etapa.numeros; i++) {
    if (i === 0) {
      numeroHtml += '<div class="n pisca"></div>';
    } else {
      numeroHtml += '<div class="n"></div>';
    }
  }
  seuVotoPara.innerHTML = "Digite no teclado seu voto para:";
  descricao.innerHTML = "";
  aviso.style.display = "none";
  lateral.innerHTML = "";
  numeros.innerHTML = numeroHtml;
  lateral.innerHTML = "";
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
    seuVotoPara.innerHTML = "SEU VOTO PARA:";
    aviso.style.display = "block";
    descricao.innerHTML = `Nome: ${candidato.nome} <br> Partido: ${candidato.partido}`;

    let fotosHTML = "";
    for (let i in candidato.fotos) {
      fotosHTML += `<div class="d-1-img"><img src="${candidato.fotos[i].url}" alt="...">${candidato.fotos[i].legenda}</div>`;
    }
    lateral.innerHTML = fotosHTML;
  } else {
    candidato = null;
    seuVotoPara.innerHTML = "SEU VOTO PARA:";
    aviso.style.display = "block";
    descricao.innerHTML = `Seu voto será <strong>ANULADO</strong>.`;
  }
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

function branco() {
  if (numero === "") {
    votoBranco = true;
    seuVotoPara.innerHTML = "SEU VOTO PARA:";
    aviso.style.display = "block";
    numeros.innerHTML = "";
    descricao.innerHTML = `Voto em <strong>BRANCO</strong>.`;
  } else {
    alert("Antes de votam em branco pressione o botão CORRIGE.");
  }
}
function corrige() {
  comecarEtapa();
}
function confirma() {
  let etapa = etapas[etapaAtual];
  let votoConfirmado = false;
  if (votoBranco === true) {
    votoConfirmado = true;
    console.log("confirmando como BRANCO...");
  } else if (numero.length === etapa.numeros) {
    votoConfirmado = true;
    console.log("Confirmando como: " + numero);
  }
  if(votoConfirmado) {
    etapaAtual++
    if(etapas[etapaAtual] !== undefined) {
      comecarEtapa();
    } else {
      document.querySelector('.tela').innerHTML = '<div class="aviso--grande">FIM!</div>';
    }
  }
}

comecarEtapa();
