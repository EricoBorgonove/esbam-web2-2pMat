const generos = document.getElementsByName("generos")
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
    let senha1 = document.getElementById("inputSenha1")
    let senha2 = document.getElementById("inputSenha2")
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
generos.forEach(genero => {
    genero.addEventListener('input', abrirOutros)
})