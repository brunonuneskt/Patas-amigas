
const conteudo = document.getElementById("conteudo");

function mostrarPagina(pagina) {
    if (pagina === "inicio") {
        conteudo.innerHTML = `
            <h2>Quem somos</h2>
            <p>Conheça a ONG Patas Amigas.</p>
        `;
    }

    if (pagina === "projetos") {
        conteudo.innerHTML = `
            <h2>Nossos projetos</h2>
            <p>Conheça os projetos da ONG.</p>
        `;
    }

    if (pagina === "cadastro") {
        conteudo.innerHTML = `
            <h2>Cadastro</h2>
            <p>Faça parte da Patas Amigas.</p>
        `;
    }
}
