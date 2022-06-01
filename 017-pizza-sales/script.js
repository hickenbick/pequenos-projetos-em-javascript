let modalqt = 0;

// criando atalhos para o querySelector
const select = (el) => document.querySelector(el);
const selectAll = (el) => document.querySelectorAll(el);

pizzaJson.map(function (item, index) {
  // clonando o item .pizza-item do html
  let pizzaItem = select(".models .pizza-item").cloneNode(true);

  pizzaItem.setAttribute("data-key", index);
  // requisitando partes do clone e alterando o innerHTML deles
  pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
  pizzaItem.querySelector(
    ".pizza-item--price",
  ).innerHTML = `Є ${item.price.toFixed(2)}`;
  pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;
  pizzaItem.querySelector(".pizza-item--img img").src = item.img;

  // event listener ao clicar nas pizzas
  pizzaItem.querySelector("a").addEventListener("click", (e) => {
    // leitura do data key de cada pizza + impressão dos dados no modal
    let key = e.target.closest(".pizza-item").getAttribute("data-key");
    modalqt = 1;

    select(".pizzaBig img").src = pizzaJson[key].img;
    select(".pizzaInfo h1").innerHTML = pizzaJson[key].name;
    select(".pizzaInfo--desc").innerHTML = pizzaJson[key].description;
    select(".pizzaInfo--price").innerHTML = `Є ${pizzaJson[key].price.toFixed(
      2,
    )}`;

    select(".pizzaInfo--size.selected").classList.remove("selected");

    // criando um forEach para cada tamanho de pizza + alterando dentro do span
    selectAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
      if (sizeIndex == 2) {
        size.classList.add("selected");
      }
      size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex];
    });

    // abertura do modal + timer
    e.preventDefault();
    select(".pizzaWindowArea").style.opacity = 0;
    select(".pizzaWindowArea").style.display = "flex";
    setTimeout(() => {
      select(".pizzaWindowArea").style.opacity = 1;
    }, 0);
  });

  // preenchendo as informações de .pizza-item
  select(".pizza-area").append(pizzaItem);
});
