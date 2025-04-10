document.addEventListener('DOMContentLoaded', function(){
    const headers = document.querySelectorAll('.accord-header')

    headers.forEach(header => {
        header.addEventListener('click' , function(){

            document.querySelectorAll('.accord-content').forEach(content => {
                content.classList.remove('active');
            });

            document.querySelectorAll('.accord-header').forEach(h =>{
                h.classList.remove('active');
            })

            const content = this.nextElementSibling;
            content.classList.add('active');
            this.classList.add('active');
        });
        
    });
});