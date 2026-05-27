const form = document.getElementById('meuForm');
 
let inputConfirmarSenha = document.getElementById('confirmarSenha')
 
inputConfirmarSenha.addEventListener('keyup', function(event) {
    let senha = document.getElementById('senha').value;
    let confirmaSenha = inputConfirmarSenha.value;
    let botao = document.getElementById('botao')
   
    if (senha === confirmaSenha) {
        botao.disabled = false
        inputConfirmarSenha.classList.remove('erro')
        inputConfirmarSenha.classList.add('acerto')
   
 
    } else {
        botao.disabled = true
        inputConfirmarSenha.classList.add('erro')
        inputConfirmarSenha.classList.remove('acerto')
 
    }
})