/**
 * =========================================================================
 * ARCHIVO PRINCIPAL DEL FRONTEND (JAVASCRIPT EN NAVEGADOR)
 * =========================================================================
 * 
 * Este archivo correrá dentro de los navegadores de tus clientes.
 * Aquí tu objetivo es:
 * 1. "Escuchar" cuando la página carga o cuando dan un click.
 * 2. Hablar por detrás con tu `Server.js` (Backend) preguntando por datos.
 * 3. "Pintar" o inyectar esos datos en tu HTML para que el cliente lo vea.
 * 
 */

//Antes de todo agregemos los inconos de las redes sociales del footer
let facebook = document.getElementById('Logo_Facebook');
let instagram = document.getElementById('Logo_Insta');
let git = document.getElementById('Logo_Git');
//Añadimos logos 
facebook.src = 'iconsSotiality/social-media.png';
instagram.src = 'iconsSotiality/instagram.png';
git.src = 'iconsSotiality/github.png'
//Los Guardamos en un array para añadirle un tamaño fijo a cada uno
let RedSocialFooter = [facebook,instagram,git]
//ahora con for each le añadimos el tamaño
RedSocialFooter.forEach(logo =>{
    logo.style.width = '25px';
});




// 1. Esperamos a que todo el HTML haya cargado primero para evitar errores
document.addEventListener("DOMContentLoaded", () => {

    console.log("El DOM ha cargado. ¡Listos para programar la lógica del frontend!");

    // =====================================================================
    // PASO 1: TRAER DATOS DEL BACKEND UTILIZANDO "FETCH"
    // `Fetch` es una función integrada en el navegador para hacer llamadas HTTP.
    // =====================================================================

    async function obtenerProductosTops() {
        try {
            // Nota: Aquí estamos llamando a nuestro propio backend web local.
            // Para que esto funcione, 'Server.js' debe estar corriendo.

            // Reemplaza esto con tu verdadera ruta de backend, ej: 'http://localhost:3000/api/productos'
            // const peticion = await fetch('http://localhost:3000/api/productos'); 
            // const productosDB = await peticion.json();

            // DATOS FICTICIOS (MOCK) para que practiques mientras aprendes backend:
            const productosDB = [
                { id: 1, nombre: 'Zapatilla Urban', precio: 120000, img: '#', desc: 'Cómodas zapatillas urbanas para caminar.' },
                { id: 2, nombre: 'Gorra Clásica', precio: 35000, img: '#', desc: 'Gorra ideal para el sol del verano.' },
                { id: 3, nombre: 'Reloj Elegance', precio: 250000, img: '#', desc: 'Acero inoxidable y máxima durabilidad.' }
            ];

            return productosDB;
        } catch (error) {
            console.error("Hubo un error contactando al backend:", error);
            // Cuando algo falla (es decir el servidor está apagado), retornamos vacío o mostramos error.
            return [];
        }
    }


    // =====================================================================
    // PASO 2: PINTAR LOS DATOS (DOM MANIPULATION)
    // El "DOM" se refiere a la estructura de las etiquetas HTML de tu archivo.
    // =====================================================================

    async function renderizarProductos() {
        // 1. Obtenemos datos del backend llamando a la función de arriba
        const listadoProductos = await obtenerProductosTops();

        // 2. Ubicamos el contenedor en tu HTML donde queremos insertar elementos
        // En tu Index.html no veo un id específico para vaciar y crear listas iterables de Top Ten,
        // pero vamos a imaginar que vas a insertar 'articles' dentro de '#TopTen_Products'.
        const container = document.getElementById('TopTen_Products');

        // (En tu HTML actual tienes botones y un `<article>` modelo hardcodeado).
        // Lo ideal sería que ese contenedor principal esté vacío y Javascript
        // repita (con un bucle) la creación de esas tarjetas por cada producto en tu SQL.

        /* 
        EJEMPLO DE CÓMO VOLCAR EL CONTENIDO:
        
        // Vaciamos primero el contenido
        container.innerHTML = `
            <button class="left"></button>
            <div class="carrusel-inner" id="carrusel_top10" style="display:flex; overflow:hidden;"></div>
            <button class="right"></button>
        `;

        const carrusel = document.getElementById('carrusel_top10');

        // Iteramos sobre todos los productos llegados del backend
        listadoProductos.forEach(producto => {
            
            // Creamos una estructura "String" idéntica a tu HTML para inyectarla
            const tarjetaHtml = `
                <article>
                    <div id="ImagenProduct">
                        <img src="${producto.img}" alt="${producto.nombre}">
                        <aside class="NombreProduct">
                            <aside>
                                <span>${producto.nombre}</span>
                                <strong>$${producto.precio} Cop</strong>
                            </aside>
                        </aside>
                    </div>
                    <div id="DescriptionProduct">
                        <div class="DescriptionProduct_inner">
                            <span>Descripción</span>
                            <aside class="DescriptionCard">
                                <p>${producto.desc}</p>
                            </aside>
                        </div>
                    </div>
                </article>
            `;
            
            // Usamos innerHTML para meter la tarjeta en el carrusel
            carrusel.innerHTML += tarjetaHtml;
        });
        */

        console.log("Productos simulados que vendrían de SQL Server:", listadoProductos);
    }

    // Iniciar funciones
    // Descomenta la siguiente línea cuando quieras ver la función actuando.
    // renderizarProductos();

    // =====================================================================
    // TU RUTA DE ESTUDIO (LO QUE DEBES APRENDER PROXIMAMENTE):
    // ---------------------------------------------------------------------
    // 1. Aprender qué es 'Promesas' y 'Async / Await' (Vital en Javascript).
    // 2. Aprender 'Fetch API' para solicitar datos.
    // 3. Crear una API GET básica en Server.js devolviendo [{}, {}].
    // 4. Intentar recibir esos datos en la Consola del Navegador desde main.js.
    // 5. Finalmente, usar "document.createElement" o "innerHTML" para 
    //    dibujar los productos conectando el flujo completo!
    // =====================================================================

});
