
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
        <section class="secao">
            <h2>Faça parte da Patas Amigas</h2>

            <form id="formulario">
                <fieldset>
                    <legend>Dados pessoais</legend>

                    <label for="nome">Nome completo:</label>
                    <input type="text" id="nome" name="nome" required>

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="nascimento">Data de nascimento:</label>
                    <input type="date" id="nascimento" name="nascimento" required>

                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf"
                           placeholder="000.000.000-00"
                           pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                           required>

                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone"
                           placeholder="(11) 99999-9999"
                           pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                           required>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <label for="endereco">Endereço:</label>
                    <input type="text" id="endereco" name="endereco" required>

                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" required>

                    <label for="estado">Estado:</label>
                    <select id="estado" name="estado" required>
                        <option value="">Selecione</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PR">Paraná</option>
                    </select>

                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep"
                           placeholder="00000-000"
                           pattern="[0-9]{5}-[0-9]{3}"
                           required>
                </fieldset>

                <fieldset>
                    <legend>Como deseja ajudar?</legend>

                    <div class="opcao">
                        <input type="radio" id="voluntario"
                               name="ajuda" value="voluntario" required>
                        <label for="voluntario">Quero ser voluntário</label>
                    </div>

                    <div class="opcao">
                        <input type="radio" id="doador"
                               name="ajuda" value="doador">
                        <label for="doador">Quero fazer doações</label>
                    </div>
                </fieldset>

                <button type="submit" class="botao">
                    Enviar cadastro
                </button>

                <p id="mensagem" role="status" aria-live="polite"></p>
            </form>
        </section>
    `;

    configurarFormulario();
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
