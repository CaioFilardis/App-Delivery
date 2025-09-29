
$(document).ready(function () {
    //
    // FUNÇÕES
    //
    const carregarItensCardapio = () => {
        var html = '';
        var categorias = Object.keys(MENU); // Pega as chaves do objeto MENU (cardapio, massas, etc.)

        // Itera sobre cada categoria
        $.each(categorias, function (i, categoria) {
            
            // Adiciona o título da categoria
            html += `
                <div class="container-group mb-5">
                    <p class="title-categoria" id="${categoria}"><b>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</b></p>
            `;

            var itens = MENU[categoria];

            // Itera sobre cada item da categoria
            $.each(itens, function (j, item) {
                html += `
                    <div class="card mb-2 item-cardapio">
                        <div class="d-flex">
                            <div class="container-img-produto" 
                            style="background-image: url('${item.img}'); background-size: cover;"></div>

                            <div class="infos-produto"> 
                                <p class="name"><b>${item.name}</b></p>
                                <p class="description">${item.dsc}</p>
                                <p class="price"><b>R$ ${item.price.toFixed(2).replace('.', ',')}</b></p>
                            </div>
                        </div>
                    </div>
                `;
            });

            html += `</div>`;
        });

        $("#listaItensCardapio").html(html);
    };

    //
    // INICIALIZAÇÃO
    //
    carregarItensCardapio();
});
