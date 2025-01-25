import taco from "./img/tacos.png";

function loadMainPage() {
  let content = document.querySelector("#content");

  let title = document.createElement("h1");
  title.textContent = "UN RESTAURANTE BIEN CHINGON ALV";
  content.appendChild(title);

  let firstParagraph = document.createElement("p");
  firstParagraph.textContent =
    "Bienvenidos a UN RESTAURANT BIEN CHINGON ALV, donde los sabores chingones no tienen límites. Aquí no solo comes, vives una experiencia cabrona: cortes jugosos, tacos que te hacen llorar de felicidad, y salsas con el balance perfecto entre fuego y gloria. Todo hecho con ingredientes frescos, pasión por la cocina, y ese sazón que te hace decir '¡a huevo!' al primer bocado.";
  firstParagraph.className = "first";
  content.appendChild(firstParagraph);

  let secondParagraph = document.createElement("p");
  secondParagraph.textContent =
    "Nuestro espacio combina lo mejor del buen gusto con un ambiente relajado y moderno, perfecto para echar la cheve, celebrar como se debe o simplemente darte el gusto que te mereces. Porque aquí, cada plato cuenta una historia y cada visita se convierte en un recuerdo épico.";
  content.appendChild(secondParagraph);

  let thirdParagraph = document.createElement("p");
  thirdParagraph.textContent =
    "No es solo comida, es una pinche fiesta de sabor. ¿Qué esperas? Vente a probar lo bueno, lo auténtico, y lo hecho para chingones como tú.";
  content.appendChild(thirdParagraph);

  let image = document.createElement("img");
  image.src = taco;
  content.appendChild(image);
}

export { loadMainPage };
