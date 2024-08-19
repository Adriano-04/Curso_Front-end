const ValorA = document.getElementById('numA')
const ValorB = document.getElementById('numB')
const form = document.getElementById('forms')

function verificaNum(numeroB,numeroA) {
    let comparacao = numeroB > numeroA
    return comparacao;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const validar = verificaNum(ValorB.value,ValorA.value)
    const messageSucess = document.getElementById('sucess')
    const messageErro = document.getElementById('erro')

    if(!validar) {
        messageSucess.style.display = 'block'
        messageErro.style.display = 'none'
        ValorB.style.border = ''
    } else {
        messageSucess.style.display = 'none'
        messageErro.style.display = 'block'
        ValorB.style.border = '1px solid red'
    }
})

console.log(ValorA.value)
console.log(ValorB.value)