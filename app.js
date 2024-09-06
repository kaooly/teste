function pesquisar() {
    // Obtém a referência para a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(campoPesquisa == "") {
        section.innerHTML = "nada encontrado"
      return
    }

campoPesquisa = campoPesquisa.toLowerCase()

    // Loga a seção no console para fins de depuração.
    console.log(section);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos).
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p>${dado.descricao}</p>
                <a href=${dado.link} target="_blank">mais informações</a>
            </div>
        `;
    }

        // Constrói o HTML para um item de resultado, incluindo título, descrição e link.
        // Utiliza template literals para facilitar a construção da string.
        
    }

if (!resultados) {
    resultados = "<p>nada encontrado</p>"
}

    // Atribui o HTML gerado para a seção, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
}

//console.log(dados[1].descricao);




   
