// Ao clicar na loja mágica de poções a função abaixo é executada para mostrar os itens que estão no array de objetos

function mostrar(){
    let section = document.getElementById("lista-pocoes")

    let listaPocoes = "";

for (let pocao of pocoes) {
    listaPocoes += `
    <div class="item-personagem">
        <h2>${pocao.tipo}</h2>
            <p>
                Descrição: ${pocao.descricao}
            </p>
            <div>
            <button>Compre com Cash</button><button>Compre com GP</button>
            </div>

    </div>            `
}

section.innerHTML = listaPocoes;
}

