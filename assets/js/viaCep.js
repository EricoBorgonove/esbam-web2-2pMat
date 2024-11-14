function validaCep(){
    const cep = document.getElementById("inputCep").value.trim()
    if (cep == "") {
        alert("Campo cep não preenchido")
    }else{
        if (cep.length <8) {
            alert("Cep Inválido")
        }else{
            viaCep(cep)
        }
    }
}
function viaCep(cep){
    console.log(cep)
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(response => {
            document.getElementById('logradouro').value = response.logradouro
            document.getElementById('bairro').value = response.bairro
            document.getElementById('cidade').value = response.localidade
            document.getElementById('estado').value = response.uf
        })
}