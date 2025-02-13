'use strict'

const categorias = [
    { nome: 'Skincare', icon: 'skincare.png', cor: 'pink' },
    { nome: 'Pinceis', icon: 'pinceis.png', cor: 'pink' },
    { nome: 'Olhos', icon: 'sombra.png', cor: 'pink' },
    { nome: 'Labios', icon: 'batom.png', cor: 'pink' }
]


function criarMenu(categoria) {
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')

    novaImagem.style.className = "card img"

    const novoSpan = document.createElement('Span')
    const lista = document.getElementById('menu')

    novaImagem.src = `./img/${categoria.icon}`
    novoSpan.textContent = categoria.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover:${categoria.cor}`

    lista.appendChild(novoItem)

}

categorias.forEach(criarMenu)

const produtos = [
    {
        nome: "Gloss Labial",
        descricao: "O Gloss Labial da Ruby Rose proporciona brilho intenso e hidratação, deixando os lábios macios e irresistíveis.",
        preco: "23,20",
        imagem: "./img/img_1 (2).png"
    },
    {
        nome: "Bronzer Sunkiss",
        descricao: "O bronzer da Ruby Rose oferece um efeito bronzeado natural e fácil aplicação.",
        imagem: "./img/img_1 (3).png"
    },
    {
        nome: "Contorno Smooth Contour",
        descricao: "O contorno da Ruby Rose realça os traços com acabamento natural e fácil aplicação.",
        imagem: "./img/img_1 (4).png"
    }

];

function criarCards() {
    const container = document.querySelector('main'); // Seleciona o <main>

    produtos.forEach(produto => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

  
        wrapper.innerHTML = `
            <figure class="card">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <figcaption>
                    <h2>${produto.nome}</h2>
                    <div class="descricao">
                        <p>${produto.descricao}</p>
                    </div>
                </figcaption>
                <button class="compra">COMPRAR</button>
            </figure>
            `;

        container.appendChild(wrapper);
    });
}


criarCards()