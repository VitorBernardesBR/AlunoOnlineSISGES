const barra_lateral = document.getElementById('barr_lat');
const menu_button = document.getElementById('Menu');

function toggleMenu() {

    if(barra_lateral.style.display ==='flex'){
        barra_lateral.style.display = 'none';
    } else {
        barra_lateral.style.display = 'flex';
    }

}

menu_button.addEventListener('click',function(event){
    event.stopPropagation();
    toggleMenu();
    
});

const divPri = document.getElementById('div-prioridade');
const rangePri =  document.getElementById('range');
rangePri.setAttribute('value' , 0);
rangePri.setAttribute('max' , '2');

let prioridade = 0;

rangePri.addEventListener('change' , function(e){
    prioridade = e.target.value;
    switchColor(prioridade);
});

function switchColor(prioridade){
    divPri.classList.remove('prioridade-1','prioridade-2','prioridade-3');
    divPri.classList.add('prioridade-'+prioridade);

    
}