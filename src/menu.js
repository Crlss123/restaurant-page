function loadMenuPage() {
  let content = document.querySelector("#content");

  let title = document.createElement("h1");
  title.textContent = "Menú de Tacos";
  content.appendChild(title);

  let lista = document.createElement("ul");

  let firstElement = document.createElement("li");
  let firstHeader = document.createElement("h2");
  firstHeader.textContent = "Taco de Adobaba";
  let firstPrice = document.createElement("span");
  firstPrice.textContent = "$20";
  firstElement.appendChild(firstHeader);
  firstElement.appendChild(firstPrice);
  lista.appendChild(firstElement);

  let secondElement = document.createElement("li");
  let secondHeader = document.createElement("h2");
  secondHeader.textContent = "Taco de Asada";
  let secondPrice = document.createElement("span");
  secondPrice.textContent = "$70"; // Fixed typo here
  secondElement.appendChild(secondHeader);
  secondElement.appendChild(secondPrice);
  lista.appendChild(secondElement);


  let thirdElement = document.createElement("li");
  let thirdHeader = document.createElement("h2");
  thirdHeader.textContent = "Taco de Chicharron";
  let thirdPrice = document.createElement("span");
  thirdPrice.textContent = "$30";
  thirdElement.appendChild(thirdHeader);
  thirdElement.appendChild(thirdPrice);
  lista.appendChild(thirdElement);


  content.appendChild(lista);
}

export { loadMenuPage };
