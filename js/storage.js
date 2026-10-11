
function salvarCadastro(dados) {
    localStorage.setItem("cadastro", JSON.stringify(dados));
}

function carregarCadastro() {
    const dados = localStorage.getItem("cadastro");

    if (dados) {
        return JSON.parse(dados);
    }

    return null;
}
