document.addEventListener('DOMContentLoaded', function(){
    const headers = document.querySelectorAll('.accord-header')

    headers.forEach(header => {
        header.addEventListener('click' , function(){
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            

            document.querySelectorAll('.accord-content').forEach(c => {
                c.classList.remove('active');
            });

            document.querySelectorAll('.accord-header').forEach(h =>{
                h.classList.remove('active');
            })

            if (!isActive) {
            content.classList.add('active');
            this.classList.add('active');
            }
        });

    });
});