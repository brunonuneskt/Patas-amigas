
const conteudo = document.getElementById("conteudo");

function mostrarPagina(pagina) {
    
if (pagina === "inicio") {
    conteudo.innerHTML = `
        <section class="hero">
            <div class="hero-texto">
                <h2>Quem somos</h2>
                <p>
                    A ONG Patas Amigas trabalha no resgate e cuidado de animais
                    abandonados, ajudando na recuperação e na busca por um novo lar.
                    Nosso objetivo é dar uma nova oportunidade para cães e gatos
                    que precisam de cuidado e proteção.
                </p>
            </div>

            <div class="hero-imagem">
                <img src="../imagens/patas-amigas-banner.jpg"
                     alt="Cão e gato representando a ONG Patas Amigas">
            </div>
        </section>

        <section class="secao">
            <h2>Como ajudar</h2>
            <p>
                Você pode ajudar através de doações, adoções responsáveis
                ou participando das nossas atividades como voluntário.
            </p>

            <div class="cards">
                <div class="card">
                    <h3>Adote</h3>
                    <p>Dê uma nova oportunidade para um animal resgatado.</p>
                </div>

                <div class="card">
                    <h3>Seja voluntário</h3>
                    <p>Ajude nos cuidados e nas atividades da ONG.</p>
                </div>

                <div class="card">
                    <h3>Faça uma doação</h3>
                    <p>Ajude com alimentos, medicamentos e outros cuidados.</p>
                </div>
            </div>
        </section>

        <section class="secao contato">
            <h2>Entre em contato</h2>
            <p>E-mail: contato@patasamigas.org</p>
            <p>Telefone: (11) 99999-9999</p>
            <p>São Paulo - SP</p>
        </section>
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
