const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");

const erroNome = document.getElementById("erroNome");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    if(nome.value == ""){

        nome.classList.add("borda-vermelha");

        erroNome.innerText = "Campo obrigatório";

    } else {

        nome.classList.remove("borda-vermelha");

        erroNome.innerText = "";

    }

});