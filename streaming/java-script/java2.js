const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    if (imagemBotaoTrocaDeTema.src.endsWith("imagens/lua.png")) {
      const modoClaroEstaAtivo = document.querySelector("link[href='css-estilo/styleap.css']")
      modoClaroEstaAtivo.href = "css-estilo-claro/style2.css";
      imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sol.png");
    }
    else {
      const modoClaroEstaAtivo = document.querySelector("link[href='css-estilo-claro/style2.css']")
      modoClaroEstaAtivo.href = "css-estilo/styleap.css";
      imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/lua.png")
    }
  });