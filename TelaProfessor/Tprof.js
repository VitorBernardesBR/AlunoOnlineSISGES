document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accord-header')

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');


            document.querySelectorAll('.accord-content').forEach(c => {
                c.classList.remove('active');
            });

            document.querySelectorAll('.accord-header').forEach(h => {
                h.classList.remove('active');
            })

            if (!isActive) {
                content.classList.add('active');
                this.classList.add('active');
            }
        });

    });
});


let dados = [];

async function loadData(){
    try {
        const resp = await fetch('mensagens.json');
        if (!resp.ok) {
            throw new Error ('Erro ao carregar dados!');
        }
        const dados = await resp.json();
        return dados;
    } catch (erro) {
        console.error('Erro: ' , erro);
        return[];
    }

}   

function listaMsg(dados) {
    const lista = document.getElementById('mensagem-lista');

    lista.innerHTML = '';

    dados.forEach(item => {
        const linha = document.createElement('li');
        linha.innerHTML = `
            <p>${item.assunto}</p>
            <p>${item.texto}</p>
        `;

        linha.classList.add('prioridade-'+item.prioridade)
        lista.appendChild(linha);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const dados = await loadData();
    listaMsg(dados);
});

