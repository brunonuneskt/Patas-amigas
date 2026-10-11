
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
        <section class="secao">
            <h2>Nossos projetos</h2>

            <img src="../imagens/patas-amigas-projetos.jpg"
                 alt="Voluntária cuidando de animais"
                 class="imagem-projetos">

            <div class="cards">
                <article class="card">
                    <h3>Resgate de animais</h3>
                    <p>
                        Realizamos o resgate de animais abandonados
                        e oferecemos os cuidados necessários.
                    </p>
                </article>

                <article class="card">
                    <h3>Adoção responsável</h3>
                    <p>
                        Buscamos novos lares para cães e gatos
                        resgatados.
                    </p>
                </article>
            </div>
        </section>

        <section class="secao">
            <h2>Voluntariado</h2>
            <p>
                Os voluntários ajudam nos cuidados com os animais
                e nas atividades da ONG.
            </p>
        </section>

        <section class="secao">
            <h2>Doações</h2>
            <p>
                As doações ajudam na compra de alimentos,
                medicamentos e outros itens necessários.
            </p>
        </section>
    `;
}


    if (pagina === "cadastro") {
        conteudo.innerHTML = `
            <h2>Cadastro</h2>
            <p>Faça parte da Patas Amigas.</p>
        `;
    }
}


const links = document.querySelectorAll(".menu a");

links.forEach(function(link) {
    link.addEventListener("click", function(evento) {
        evento.preventDefault();

        const pagina = link.dataset.pagina;

        mostrarPagina(pagina);
    });
});
