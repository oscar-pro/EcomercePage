
document.addEventListener('DOMContentLoaded',DomCompleted);

function DomCompleted (DomContentLoaded) {
    const Page = window.location.pathname;
    // Para Mobile se necesita 'RUTAngrok+/Index.html || RUTAViewCode+/Index.html
    if (Page.includes('Index.html')) {
        //Codigo para Menu Nav
        const navegation = document.getElementById('navegation');
        const menu = document.getElementById('MenuAmburguesa');
        const Regresar = document.getElementById('btnRegresar');
        menu.addEventListener('click', () => {

            navegation.style.transform = 'translateX(0)';
            if (navegation.style.transform === 'translateX(0)') {
                alert('eestado salido')
            }
        });


        Regresar.addEventListener('click', () => {
            navegation.style.transform = 'translateX(-150%)';
        });
        //Codigo Para Search
        // Codigo para Selección Categorias
        // Codigo para Carrito
    }

}
