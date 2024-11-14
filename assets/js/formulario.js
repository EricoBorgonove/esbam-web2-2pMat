//countries[4].code
const countries = [
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Brazil", code: "BR" },
    { name: "Brunei Darussalam", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cabo Verde", code: "CV" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo (Congo-Brazzaville)", code: "CG" },
    { name: "Congo, Democratic Republic of the", code: "CD" },
    { name: "Costa Rica", code: "CR" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Eswatini", code: "SZ" },
    { name: "Ethiopia", code: "ET" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Greece", code: "GR" },
    { name: "Grenada", code: "GD" },
    { name: "Guatemala", code: "GT" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Honduras", code: "HN" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "Korea (North)", code: "KP" },
    { name: "Korea (South)", code: "KR" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Lao People's Democratic Republic", code: "LA" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia (Federated States of)", code: "FM" },
    { name: "Moldova (Republic of)", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montenegro", code: "ME" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "North Macedonia", code: "MK" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Qatar", code: "QA" },
    { name: "Romania", code: "RO" },
    { name: "Russian Federation", code: "RU" },
    { name: "Rwanda", code: "RW" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Sudan", code: "SS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syrian Arab Republic", code: "SY" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom of Great Britain and Northern Ireland", code: "GB" },
    { name: "United States of America", code: "US" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Venezuela (Bolivarian Republic of)", code: "VE" },
    { name: "Viet Nam", code: "VN" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" }
]

const estadosBrasil = [
    { name: "Acre", code: "AC" },
    { name: "Alagoas", code: "AL" },
    { name: "Amapá", code: "AP" },
    { name: "Amazonas", code: "AM" },
    { name: "Bahia", code: "BA" },
    { name: "Ceará", code: "CE" },
    { name: "Distrito Federal", code: "DF" },
    { name: "Espírito Santo", code: "ES" },
    { name: "Goiás", code: "GO" },
    { name: "Maranhão", code: "MA" },
    { name: "Mato Grosso", code: "MT" },
    { name: "Mato Grosso do Sul", code: "MS" },
    { name: "Minas Gerais", code: "MG" },
    { name: "Pará", code: "PA" },
    { name: "Paraíba", code: "PB" },
    { name: "Paraná", code: "PR" },
    { name: "Pernambuco", code: "PE" },
    { name: "Piauí", code: "PI" },
    { name: "Rio de Janeiro", code: "RJ" },
    { name: "Rio Grande do Norte", code: "RN" },
    { name: "Rio Grande do Sul", code: "RS" },
    { name: "Rondônia", code: "RO" },
    { name: "Roraima", code: "RR" },
    { name: "Santa Catarina", code: "SC" },
    { name: "São Paulo", code: "SP" },
    { name: "Sergipe", code: "SE" },
    { name: "Tocantins", code: "TO" }
]


const generos = document.getElementsByName("generos")
let senha1 = document.getElementById("inputSenha1")
let senha2 = document.getElementById("inputSenha2")
let paises = document.getElementById("paises")

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

function verPaises(){
    for (let i = 0; i< countries.length; i++){
        let option = document.createElement("option")
        option.textContent = countries[i].name
        option.setAttribute("value", countries[i].code)
        paises.appendChild(option)
    }
}

function verEstados(){
    let estados = document.getElementById("estados")
    let labelEstados = document.getElementById("labelEstados")
    if (paises.value == "BR"){
        for (let i = 0; i< estadosBrasil.length; i++){
            let option = document.createElement("option")
            option.textContent = estadosBrasil[i].name
            //option.value = estadosBrasil[i].code
            option.setAttribute("value", estadosBrasil[i].code)
            estados.appendChild(option)
        }
        estados.hidden = false
        labelEstados.hidden = false
    }else{
        estados.hidden = true
        labelEstados.hidden = true
    }
}

verPaises()
generos.forEach(genero => {
    genero.addEventListener('input', abrirOutros)
})
paises.addEventListener("click", verEstados)
senha1.addEventListener("input", comparePassword)
senha2.addEventListener("input", comparePassword)