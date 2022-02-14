const botao = document.getElementById('somar')
const alerta = document.querySelector('.erroIcon')
const primeiroValor = document.getElementById('valor-1')
const segundoValor = document.getElementById('valor-2')
const resultado = document.getElementById('resultado')

botao.addEventListener('click', (event) => {
    event.preventDefault()

    if (primeiroValor.value == '') {
        primeiroValor.classList.add('erro')
        alert('Por gentileza, preencha o Valor 1')
        resultado.value = ""        
    }
    else if (parseInt(primeiroValor.value) <= 0) {
        primeiroValor.classList.add('erro')
        alert('O Valor 1 não pode ser menor ou igual a 0')
        resultado.value = ""
    }

    if (segundoValor.value == '') {
        segundoValor.classList.add('erro')
        alert('Por gentileza, preencha o Valor 2')
        resultado.value = ""
    }

    else if (parseInt(segundoValor.value) <= 0) {
        segundoValor.classList.add('erro')
        alert('O Valor 2 não pode ser menor ou igual a 0')
        resultado.value = ""
    }
    
    if (primeiroValor.value !== '' && parseInt(primeiroValor.value) > 0) {
        primeiroValor.classList.remove('erro')
    }
    
    if (segundoValor.value !== '' && parseInt(segundoValor.value) > 0) {
        segundoValor.classList.remove('erro')
    }
    
    if (primeiroValor.value !== '' && parseInt(primeiroValor.value) > 0 && segundoValor.value !== '' && parseInt(segundoValor.value) > 0) {
        const primeiraSoma = parseInt(primeiroValor.value)
        const segundaSoma = parseInt(segundoValor.value)
        resultado.value = primeiraSoma+segundaSoma
    }
})