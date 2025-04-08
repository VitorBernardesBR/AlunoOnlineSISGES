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