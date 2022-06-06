let modalQt = 0;
let modalKey = 0;
let cart = [];
const select = (el) => document.querySelector(el);
const selectAll = (el) => document.querySelectorAll(el);

// listagem das pizzas
pizzaJson.map((item, index) => {
  let pizzaItem = select(".models .pizza-item").cloneNode(true);
  pizzaItem.setAttribute("data-key", index);
  pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
  pizzaItem.querySelector(
    ".pizza-item--price",
  ).innerHTML = `Є ${item.price.toFixed(2)}`;
  pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;
  pizzaItem.querySelector(".pizza-item--img img").src = item.img;

  pizzaItem.querySelector("a").addEventListener("click", (e) => {
    let key = e.target.closest(".pizza-item").getAttribute("data-key");
    modalQt = 1;
    modalKey = key;

    select(".pizzaBig img").src = pizzaJson[key].img;
    select(".pizzaInfo h1").innerHTML = pizzaJson[key].name;
    select(".pizzaInfo--desc").innerHTML = pizzaJson[key].description;
    select(".pizzaInfo--size.selected").classList.remove("selected");
    select(".pizzaInfo--actualPrice").innerHTML = `Є ${pizzaJson[
      key
    ].price.toFixed(2)}`;

    selectAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
      if (sizeIndex === 2) {
        size.classList.add("selected");
      }
      size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex];
    });
    select(".pizzaInfo--qt").innerHTML = modalQt;

    e.preventDefault();
    select(".pizzaWindowArea").style.opacity = 0;
    select(".pizzaWindowArea").style.display = "flex";
    setTimeout(() => {
      select(".pizzaWindowArea").style.opacity = 1;
    }, 0);
  });

  select(".pizza-area").append(pizzaItem);
});

// eventos do modal
function closeModal() {
  select(".pizzaWindowArea").style.opacity = 0;
  setTimeout(() => {
    select(".pizzaWindowArea").style.display = "none";
  }, 500);
}
selectAll(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton").forEach(
  (item) => {
    item.addEventListener("click", closeModal);
  },
);
select(".pizzaInfo--qtmais").addEventListener("click", () => {
  modalQt++;
  select(".pizzaInfo--qt").innerHTML = modalQt;
});
select(".pizzaInfo--qtmenos").addEventListener("click", () => {
  if (modalQt > 1) {
    modalQt--;
    select(".pizzaInfo--qt").innerHTML = modalQt;
  }
});
selectAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
  size.addEventListener("click", (e) => {
    select(".pizzaInfo--size.selected").classList.remove("selected");
    size.classList.add("selected");
  });
});
select(".pizzaInfo--addButton").addEventListener("click", () => {
  let size = parseInt(
    select(".pizzaInfo--size.selected").getAttribute("data-key"),
  );

  let identifier = pizzaJson[modalKey].id + "@" + size;

  let key = cart.findIndex((item) => item.identifier == identifier);
  if (key > -1) {
    cart[key].qt += modalQt;
  } else {
    cart.push({
      identifier,
      id: pizzaJson[modalKey].id,
      size,
      qt: modalQt,
    });
  }
  updateCart();
  closeModal();
});

select(".menu-openner").addEventListener("click", () => {
  if (cart.length > 0) {
    select("aside").style.left = "0";
  }
});

select(".menu-closer").addEventListener("click", () => {
  select("aside").style.left = "100vh";
});

// eventos do carrinho
function updateCart() {
  select(".menu-openner span").innerHTML = cart.length;

  if (cart.length > 0) {
    select("aside").classList.add("show");
    select(".cart").innerHTML = "";

    let subtotal = 0;
    let desconto = 0;
    let total = 0;

    for (let i in cart) {
      let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id);
      subtotal += pizzaItem.price * cart[i].qt;

      let cartItem = select(".models .cart--item").cloneNode(true);

      let pizzaSizeName;
      switch (cart[i].size) {
        case 0:
          pizzaSizeName = "P";
          break;
        case 1:
          pizzaSizeName = "M";
          break;
        case 2:
          pizzaSizeName = "G";
          break;
      }

      let pizzaName = `${pizzaItem.name} ${pizzaSizeName}`;

      cartItem.querySelector("img").src = pizzaItem.img;
      cartItem.querySelector(".cart--item-nome").innerHTML = pizzaName;
      cartItem.querySelector(".cart--item--qt").innerHTML = cart[i].qt;
      cartItem
        .querySelector(".cart--item-qtmais")
        .addEventListener("click", () => {
          cart[i].qt++;
          updateCart();
        });
      cartItem
        .querySelector(".cart--item-qtmenos")
        .addEventListener("click", () => {
          if (cart[i].qt > 1) {
            cart[i].qt--;
          } else {
            cart.splice(i, 1);
          }
          updateCart();
        });

      select(".cart").append(cartItem);
    }

    desconto = subtotal * 0.1;
    total = subtotal - desconto;

    select(".subtotal span:last-child").innerHTML = `$ ${subtotal.toFixed(2)}`;
    select(".desconto span:last-child").innerHTML = `$ ${desconto.toFixed(2)}`;
    select(".total span:last-child").innerHTML = `$ ${total.toFixed(2)}`;
  } else {
    select("aside").classList.remove("show");
    select("aside").style.left = "100vh";
  }
}
