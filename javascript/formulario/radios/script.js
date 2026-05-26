const form = document.getElementById('meuForm')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let login = form.login.value;
    let senha = form.senha.value;

    if (login === '' || senha === '') {
        console.error("bota login ou senha bobão")
        return;
    }
    console.log(login, senha)

    form.reset()
})

// Maneira antiga

 