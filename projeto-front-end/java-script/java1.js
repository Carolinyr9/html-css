const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    if (imagemBotaoTrocaDeTema.src.endsWith("imagens/lua.png")) {
      const modoClaroEstaAtivo = document.querySelector("link[href='css-estilo/style.css']")
      modoClaroEstaAtivo.href = "css-estilo-claro/style.css";
      imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sol.png");
    }
    else {
      const modoClaroEstaAtivo = document.querySelector("link[href='css-estilo-claro/style.css']")
      modoClaroEstaAtivo.href = "css-estilo/style.css";
      imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/lua.png")
    }
  });