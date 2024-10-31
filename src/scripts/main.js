document.addEventListener("DOMContentLoaded", function() {
    const valorSecreto = Math.floor(Math.random() * 100);
    const botaoVerificador = document.getElementById("btn")
    const msg = document.getElementById("mensagem");

    botaoVerificador.addEventListener("click", function(evento) {
        evento.preventDefault()
        const valorDigitado = document.getElementById("palpite").value
        const palpite = parseInt(valorDigitado)
        document.querySelector("#mensagem").style.display = "block"
        
        if (palpite < valorSecreto) {
            msg.innerText = "Tente um número maior!"
        } else if (palpite > valorSecreto) {
            msg.innerText = "Tente um número menor!"
        } else if (palpite == valorSecreto) {
            msg.innerText = "você acertou!!"
        }
    })
})