
const button = document.querySelector('.btn-login')
const textarea = document.querySelector('#ideia')
const input_name = document.querySelector('#nome')
const input_email = document.querySelector('#login-email')
const res_area = document.querySelector('#res')

button.addEventListener('click', FunRes)

function FunRes(){
    if(input_email.value != '' && input_name.value != '' && textarea.value != ''){
        res_area.style.fontSize = '1.10em'
        res_area.style.marginTop = 20 + 'px'
        res_area.style.textAlign = 'center'
        res_area.innerHTML = 'Obrigado por compartilhar isso conosco. <br> Entraremos em contato em breve!'


     input_name.value = ''
     input_email.value = ''
     textarea.value = ''
    }

    else {
        alert('Preencha os dados')
    }

}

const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

const css = document.querySelector("link[href='css-estilo/styleex.css']")

botaoAlterarTema.addEventListener("click", () => {

  const modoClaroEstaAtivo = document.querySelector("link[href='css-estilo/styleex.css']").href = "css-estilo-claro/style3.css";

    if (modoClaroEstaAtivo) {
      imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sol.png");
    } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/lua.png");
  }
});