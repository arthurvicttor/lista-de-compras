import { criarItemLista } from "./scripts/criar-item-lista.js";
import verificarListaVazia from "./scripts/verificar-lista-vazia.js";

const listaCompras = document.getElementById("lista-de-compras");
const buttonAdd = document.getElementById("adicionar-item");

buttonAdd.addEventListener("click", (evento) => {
  evento.preventDefault();
  const itemLista = criarItemLista();
  listaCompras.appendChild(itemLista);
  verificarListaVazia(listaCompras);
});
