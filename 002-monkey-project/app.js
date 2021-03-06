// Declarando Variáveis

const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");

// Adicionando Event Listener

closedFace.addEventListener("click", () => {
  if (openFace.classList.contains("open")) {
    openFace.classList.add("active");
    closedFace.classList.remove("active");
  }
});

openFace.addEventListener("click", () => {
  if (openFace.classList.contains("open")) {
    closedFace.classList.add("active");
    openFace.classList.remove("active");
  }
});
