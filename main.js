import { dataFood } from "./data.js";

// console.log(dataFood);

const bt = document.querySelector(".buttonHidden");
const divHidden = document.querySelector(".divVerde");
const ClassdivVerde = document.querySelector(".hidden");

bt.addEventListener("click", () => {
  if (bt.textContent === "Mostrar") {
    bt.textContent = "Ocultar";
    ClassdivVerde.classList.remove("hidden");
    ClassdivVerde.classList.add("divVerde");
  } else {
    bt.textContent = "Mostrar";
    ClassdivVerde.classList.remove("divVerde");
    ClassdivVerde.classList.add("hidden");
  }
});

//                                desde js crear un div con la forma de la card de la pizarra

const divAllCards = document.createElement("div");
divAllCards.style.width = "80%";
divAllCards.style.display = "flex";
divAllCards.style.flexWrap = "wrap";
divAllCards.style.gap = "20px";
divAllCards.style.justifyContent = "center";
divAllCards.style.margin = "auto";

document.querySelector("body").appendChild(divAllCards);

//                                              APLICAMOS FOREACH PARA CREAR UNA CARD POR CADA OBJETO DEL ARRAY DATA

dataFood.forEach((data) => {
  const divCardContainer = document.createElement("div");
  divCardContainer.style.width = "180px";
  divCardContainer.style.height = "300px";
  divCardContainer.style.backgroundColor = "white";
  divCardContainer.style.marginTop = "50px";
  divCardContainer.style.marginBottom = "50px";
  divCardContainer.style.display = "flex";
  divCardContainer.style.alignItems = "center";
  divCardContainer.style.flexDirection = "column";
  divCardContainer.style.gap = "20px";
  divCardContainer.style.borderRadius = "36px";
  divCardContainer.style.border = "10px solid";

  const imgDivCard = document.createElement("img");
  imgDivCard.style.width = "160px";
  imgDivCard.style.height = "160px";
  imgDivCard.style.paddingTop = "10px";
  imgDivCard.src = data.img;
  imgDivCard.style.borderRadius = "36px";

  const divCardName = document.createElement("div");
  divCardName.innerHTML = data.productName;
  divCardName.style.fontSize = "16px";

  const divCardPrice = document.createElement("div");
  divCardPrice.innerHTML = data.price + "€ ";
  divCardPrice.style.fontSize = "12px";

  const buttonCard = document.createElement("button");
  buttonCard.innerHTML = "Agregar";
  buttonCard.addEventListener("click", () => {
    const divCardContainer = document.createElement("div");
    divCardContainer.classList.add("divContainerMiniCard");

    const imgDivCard = document.createElement("img");
    imgDivCard.src = data.img;
    imgDivCard.classList.add("miniDivImg");

    const divCardNamePrice = document.createElement("div");

    const pCardName = document.createElement("p");
    pCardName.innerHTML = data.productName;

    const pPrice = document.createElement("p");
    pPrice.innerHTML = data.price + "€ ";

    const buttonMiniCard = document.createElement("button");
    buttonMiniCard.innerHTML = "X";
    buttonMiniCard.addEventListener("click", () => {
      divCardContainer.remove();
    });

    const containerListProduct = document.querySelector(
      "#ContainerListProduct"
    );
    containerListProduct.appendChild(divCardContainer);
    divCardContainer.appendChild(imgDivCard);
    divCardContainer.appendChild(divCardNamePrice);
    divCardNamePrice.appendChild(pCardName);
    divCardNamePrice.appendChild(pPrice);
    divCardContainer.appendChild(buttonMiniCard);

    document
      .getElementById("clearButton")
      .addEventListener("click", function () {
        divCardContainer.remove(divAllCards);
      });
  });

  divAllCards.appendChild(divCardContainer);
  divCardContainer.appendChild(imgDivCard);
  divCardContainer.appendChild(divCardName);
  divCardContainer.appendChild(divCardPrice);
  divCardContainer.appendChild(buttonCard);
});

// boton que limpie tdo el div verde

// const clearButtonContainer = document.createElement("div");
// clearButtonContainer.classList.add("clearContaner");
// divHidden.appendChild("clearButtonContainer")

// const clearBotton = document.createElement("button");
// clearBotton.innerHTML = "CLEAR"
// clearButtonContainer.appendChild(clearBotton)

/* 
const carrito = productos.reduce((acumulado, producto) => {
    const { id, nombre, precio, cantidad } = producto;

    if (acumulado[id]) {
        acumulado[id].cantidad += cantidad;
    } else {
        acumulado[id] = { id, nombre, precio, cantidad };
    }

    return acumulado;
}, {});

const resultado = Object.values(carrito); */
