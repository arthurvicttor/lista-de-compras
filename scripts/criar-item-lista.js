import gerarDiaSemana from "./gerar-dia-semana.js";

const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemLista() {
  if (inputItem.value === "") {
    alert("Por favor, insira um item!");
    return;
  }

  const itemLista = document.createElement("li");

  const containerItemLista = document.createElement("div");
  containerItemLista.classList.add("lista-item-container");

  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = `checkbox-${contador++}`;

  const nomeItem = document.createElement("p");
  nomeItem.innerText = inputItem.value;

  inputCheckbox.addEventListener("click", function () {
    if (inputCheckbox.checked) {
      nomeItem.style.textDecoration = "line-through";
    } else {
      nomeItem.style.textDecoration = "none";
    }
  });

  containerItemLista.appendChild(inputCheckbox);
  containerItemLista.appendChild(nomeItem);

  itemLista.appendChild(containerItemLista);

  const dataCompleta = gerarDiaSemana();

  const textoData = document.createElement("p");
  textoData.classList.add("texto-data");
  textoData.innerText = dataCompleta;
  itemLista.appendChild(textoData);

  return itemLista;
}
