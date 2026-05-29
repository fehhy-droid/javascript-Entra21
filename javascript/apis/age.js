async function buscarIdade() {
    const url = 'https://api.agify.io/?name='
    try {
        const response = await fetch(url + 'Fernanda')
        const dados = await response.json();
        console.log(dados)
    } catch (erro) {
        console.error(erro)
    }   
}
        
buscarIdade()
