const nome = document.getElementById("nome")
const sobrenome = document.getElementById("sobrenome")
let nomeSobrenome = document.getElementById("nomeSobrenome")

function juntarNome (){
    nomeSobrenome.innerHTML = (`${nome.value} ${sobrenome.value}`)
}