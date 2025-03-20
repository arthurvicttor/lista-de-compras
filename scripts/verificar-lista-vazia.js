const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaCompras) {
  const itensLista = listaCompras.querySelectorAll("li");
  if (itensLista.length === 0) {
    mensagemListaVazia.style.display = "block";
  } else {
    mensagemListaVazia.style.display = "none";
  }
}

export default verificarListaVazia;
