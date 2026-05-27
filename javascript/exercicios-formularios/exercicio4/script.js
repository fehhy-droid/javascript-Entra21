let inputAceite = document.getElementById("aceite");

inputAceite.addEventListener("change", function() {

    let botao = document.getElementById("botao");
    if (inputAceite.checked === true) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
});