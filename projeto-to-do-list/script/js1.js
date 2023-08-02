// li

let listItens = document.querySelectorAll(".sem")

listItens.forEach((li, index) => {
    li.addEventListener("click", () => {
        FunDelClass()
        li.classList.add("ativo")
    }
    )})


function FunDelClass(){
    listItens.forEach((li) => {
        li.classList.remove("ativo")
    })
}

// svg

let climaItens = document.querySelectorAll(".clima")

climaItens.forEach((clima, index) => {
    clima.addEventListener("click", () => {
        FunDelClima()
        clima.classList.add("active")
    }
    )})


function FunDelClima(){
    climaItens.forEach((clima) => {
        clima.classList.remove("active")
    })
}

