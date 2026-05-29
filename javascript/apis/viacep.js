const form = document.getElementById('meuform');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // não carrega a pagina(atualizar)
    buscarEndereco(form.cep.value);
});

async function buscarEndereco(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    try {
        const response = await fetch(url, { method: 'GET' });
        const dados = await response.json();  
        console.log("Bairro: " , dados.bairro)
        console.log('Cidade:' , dados.localidade)
    }    catch (error) {
        console.error('Erro ao buscar o endereço:', error);
    }
}
