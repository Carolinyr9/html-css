const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoClaroEstaAtivo = document.querySelector("link[href='css-estilo/styleap.css']").href = "css-estilo-claro/style2.css";

    if (modoClaroEstaAtivo) {
      imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sol.png");
    } else {
      imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/lua.png");
    }
  });