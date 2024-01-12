    // Referência ao elemento <nav>
    var navElement = document.querySelector('.pop-up');

    // Definição do conteúdo HTML
    var novoConteudo = `
    <a class="home-i" href="../index.html" target="_blank"><i class='bx bxs-home'></i>Home</a>
    <span class="close">×</span>
    
    <h2 class="indice-destaque">Índice</h2>
    <details>
        <summary>TODAS AS LENDAS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>
    <details>
        <summary>MISCELÂNEAS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary>ARMAS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary>OBJETOS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary>CRIATURAS</summary>
        <ul>
            <li><a href="draconianos-altos.html">Draconianos Altos</a></li>
        </ul>
    </details>

    <details>
        <summary>PLANTAS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary>CULTOS E CRENÇAS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary>DEIDADES</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary>TEXTOS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary>LUGARES</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary>MAGIA</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>

    <details>
        <summary>MATERIAIS</summary>
        <ul>
            <li><a href="produtos.html#d1">Destaques em Livros</a></li>
        </ul>
    </details>
    `;

    // Atualização do conteúdo do <nav>
    navElement.innerHTML = novoConteudo;





const indicebtn = document.getElementById('ibtn');

const pop = document.getElementById('id-pop');

const closeBtn = document.querySelector('.close'); // ja que é classe pega com . na frente

function exibirPopup(){
    pop.style.display = 'block';
}

function fecharPopup(){
    pop.style.display = 'none';
}

indicebtn.addEventListener('click', exibirPopup );

closeBtn.addEventListener('click', fecharPopup);


