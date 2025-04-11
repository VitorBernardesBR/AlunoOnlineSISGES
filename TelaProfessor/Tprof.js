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
// function loadData(){
//     fetch('./data.json')
//     .then(function(response){ //Transforma o texto em um objeto JSON
//         return response.json();
//     })
//     .then(function(data){ //Dados obtidos/convertidos com sucesso!
//         //console.log(data);
//         data.forEach(function(item, index){
//             addItemLista(item, index)
//         })
//         dados = data;
//     })
//     .catch(function(err){ //Ocorreu um erro na obtenção/interpretação dos dados
//         alert("Ocorreu um erro!")
//         console.error(err)
//     });
// }

let dados = [];

function loadData(){
    fetch('mensagens.json')
    .then(function(response){
        return response.json;
    })
    .then(function(data){
        console.log(data);
        data.forEach(function(item,index){
            listaMsg(item,index);
        })
        dados = data;
    })
    .catch(function(err){
        alert('Ocorreu um erro ao carregar as mesgens;');
    })
}



function listaMsg() {
    const lista = document.getElementById('mensagem-lista');
    let linha = document.createElement('li');
    let assunto = document.createElement('p');
    
    dados[index].assunto
    
    linha.appendChild(assunto);
    lista.appendChild(linha);

    let prioridade = 0;

    rangePri.addEventListener('change', function (e) {
        prioridade = e.target.value;
        switchColor(prioridade);
    });

    function switchColor(prioridade) {
        divPri.classList.remove('prioridade-0', 'prioridade-1', 'prioridade-2');
        divPri.classList.add('prioridade-' + prioridade);
    }



}

