const formulario = document.getElementById("meuFormulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Formulário interceptado com sucesso!");

});