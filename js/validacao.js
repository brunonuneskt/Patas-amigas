
function configurarFormulario() {
    const formulario = document.getElementById("formulario");
    const mensagem = document.getElementById("mensagem");

    const dadosSalvos = carregarCadastro();

    if (dadosSalvos) {
        Object.keys(dadosSalvos).forEach(function(campo) {
            const elemento = formulario.elements.namedItem(campo);

            if (elemento && campo !== "ajuda") {
                elemento.value = dadosSalvos[campo];
            }
        });

        const opcao = formulario.querySelector(
            'input[name="ajuda"][value="' + dadosSalvos.ajuda + '"]'
        );

        if (opcao) {
            opcao.checked = true;
        }
    }

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const campos = formulario.querySelectorAll("input, select");
        let valido = true;

        campos.forEach(function(campo) {
            if (!campo.checkValidity()) {
                campo.style.borderColor = "red";
                valido = false;
            } else {
                campo.style.borderColor = "";
            }
        });

        if (!valido) {
            mensagem.textContent = "Confira os campos destacados.";
            mensagem.style.color = "red";
            return;
        }

        const dados = {
            nome: formulario.elements.nome.value,
            email: formulario.elements.email.value,
            nascimento: formulario.elements.nascimento.value,
            cpf: formulario.elements.cpf.value,
            telefone: formulario.elements.telefone.value,
            endereco: formulario.elements.endereco.value,
            cidade: formulario.elements.cidade.value,
            estado: formulario.elements.estado.value,
            cep: formulario.elements.cep.value,
            ajuda: formulario.querySelector('input[name="ajuda"]:checked').value
        };

        salvarCadastro(dados);

        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";
    });
}
