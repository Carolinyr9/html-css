let fano = document.getElementById('year')
let fmes = document.getElementById('month')
let fdia = document.getElementById('day')
let resano = document.getElementById('ouryear')
let resmes = document.getElementById('ourmonth')
let resdia = document.getElementById('ourday')
let data = new Date
let ano = data.getFullYear()
let mes = data.getMonth()
let dia = data.getDay()
let mesb
 
function ageCalculate() {
    if (fano.value.length == 0 || fmes.value.length == 0 || fdia.value.length == 0){
        const label = document.getElementsByTagName("label")
        const input = document.getElementsByTagName("input")

        label.classList.add("errobox");
        input.classList.add("errobox")
    }
    else {
        if (fano.value > ano || fmes.value > mes || fdia.value > dia) {
            const label = document.getElementsByTagName("label")
            const input = document.getElementsByTagName("input")
    
            label.classList.add("dataerro");
            input.classList.add("dataerro")

        }

        
        else {
            resano.innerHTML = ''

            let anob = Number(ano) - Number(fano.value)
            resano.innerHTML = anob
            resmes.innerHTML = ''
            let mesb = mes - Number(fmes.value)
            resmes.innerHTML = mesb
            resdia.innerHTML = ''
            let diab = Number(fdia.value) - dia
            resdia.innerHTML = diab
        } 
        if (mesb < 0) {
            mesc = Number(fmes.value) - mes
            resmes.innerHTML = mesc
        } 

    }

}
