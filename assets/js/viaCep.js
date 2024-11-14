let cepValido = ""
const tabela = document.getElementById("tabelaDados")


function validaCep(){
    const cep = document.getElementById("inputCep").value.trim()
    if (cep == "") {
        alert("Campo cep não preenchido")
    }else{
        if (cep.length <8) {
            alert("Cep Inválido")
        }else{
            cepValido = cep
            viaCep(cep)
        }
    }
}
function viaCep(cep){

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(response => {
            if ("erro" in response) {
                alert ("Cep não encontrado")
            }else{
                document.getElementById('logradouro').value  = response.logradouro
                document.getElementById('bairro').value = response.bairro
                document.getElementById('cidade').value = response.localidade
                document.getElementById('estado').value = response.uf
            }
        })
}
function limparCampos(){
    document.getElementById("inputCep").value = ""
    document.getElementById('logradouro').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('estado').value = ""
    //tabela.deleteRow(1)
}
function adicionarTabela() {
    

    const novaLinha = tabela.insertRow()

    const celulaCep = novaLinha.insertCell(0)
    const celulaLogradouro = novaLinha.insertCell(1)
    const celulaBairro = novaLinha.insertCell(2)
    const celulaCidade = novaLinha.insertCell(3)
    const celulaEstado = novaLinha.insertCell(4)


    celulaCep.textContent = cepValido || "N/A"
    celulaLogradouro.textContent = document.getElementById('logradouro').value || "N/A"
    celulaBairro.textContent = document.getElementById('bairro').value || "N/A"
    celulaCidade.textContent = document.getElementById("cidade").value || "N/A"
    celulaEstado.textContent = document.getElementById("estado").value || "N/A"

}