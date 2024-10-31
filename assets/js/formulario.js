const generos = document.getElementsByName("generos")
let senha1 = document.getElementById("inputSenha1")
let senha2 = document.getElementById("inputSenha2")

function abrirOutros(){
    let outros = document.querySelector("#inputOutros")
    //const outros = document.getElementByID('inputOutros')
    if (generos[2].checked) {
        outros.disabled = false
    } else{
        outros.disabled = true
    }
}
function togglePass(){
    let botaoVer = document.getElementById("botaoVer")

    if (senha1.type == "password" || senha2.type == "password") {
        senha1.type = "text"
        senha2.type = "text"
        botaoVer.innerHTML = "desver"
    } else{
        senha1.type = "password"
        senha2.type = "password"
        botaoVer.innerHTML = "ver"
    }
    
}
function comparePassword(){
    let erroSenha = document.getElementById("erroSenha")
    if (senha1.value != senha2.value && senha2.value != ""){
        senha1.classList.add("classRed")
        senha2.classList.add("classRed")
        erroSenha.innerHTML = "As senhas não conferem"
    }else{
        senha1.classList.remove("classRed")
        senha2.classList.remove("classRed")
        erroSenha.innerHTML=""
    }
}
generos.forEach(genero => {
    genero.addEventListener('input', abrirOutros)
})

senha1.addEventListener("input", comparePassword)
senha2.addEventListener("input", comparePassword)