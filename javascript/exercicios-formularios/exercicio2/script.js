const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();
    let erroNome = document.getElementById("erroNome");

    if(formulario.nome.value == ""){
        console.log("erro")

        formulario.nome.classList.add("borda-vermelha");

        erroNome.innerText = "Campo obrigatório";

    } else {
        console.log("erro)")
        formulario.nome.classList.remove("borda-vermelha");

        erroNome.innerText = "";

    }

});