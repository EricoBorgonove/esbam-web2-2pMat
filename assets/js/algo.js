/*
    façam uma página que leia um nome e um sobrenome em 2 inputs
    e os mostre juntos dentro de um span
*/
function lerTexto(){
    let texto = document.getElementById("inputTexto")
    let meuTexto = document.getElementById("meuTexto")

    meuTexto.innerHTML = (`${meuTexto.innerHTML} ${texto.value}`)
    // alert (texto.value)
    // console.log (texto)
    //console.log(jose)
   //document.getElementById("paragrafo").innerHTML = texto.value
}

/*
  --> Concatenação de Strings
  "primeiro texto" + " " "segundo texto"

  template string
  `primeiro texto segundo texto`
  `${nomeVariavel} primeiro texto ${outraVariavel}`


*/ 