function exibirConteudo(conteudo, imagem) {
  document.getElementById("imagem").src = imagem;

  // Cria uma lista a partir do conteúdo do botão
  var lista = document.createElement("ul");
  var itens = conteudo.split(",");
  for (var i = 0; i < itens.length; i++) {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(itens[i]));
    lista.appendChild(item);
  }

  // Atualiza o conteúdo com a lista criada
  document.getElementById("conteudo").innerHTML = lista.outerHTML;
}
