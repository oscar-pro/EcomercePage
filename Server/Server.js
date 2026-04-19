/**
 * =========================================================================
 * ARCHIVO PRINCIPAL DEL SERVIDOR (BACKEND)
 * =========================================================================
 * 
 * ¡Hola! Este es el archivo donde vas a construir tu "backend" (la parte de
 * tu aplicación que corre en el servidor, no en el navegador del usuario).
 * 
 * Para que esto funcione, necesitas aprender sobre **Node.js** y un 
 * framework llamado **Express**.
 * 
 * PASOS PARA CONFIGURAR ESTO EN TU TERMINAL:
 * 1. Abre tu terminal en la carpeta "Server" (o en la raíz de tu proyecto).
 * 2. Escribe: `npm init -y` (Esto creará un archivo package.json).
 * 3. Escribe: `npm install express cors mssql dotenv`
 *    - express: Nos ayuda a crear rutas y encender el servidor web.
 *    - cors: Permite que tu frontend se comunique con tu backend sin errores de seguridad.
 *    - mssql: Es la librería oficial para conectar Node.js con SQL Server.
 *    - dotenv: Para esconder credenciales de bases de datos.
 * 
 * =========================================================================
 */

// 1. IMPORTAR LAS LIBRERÍAS (Una vez que las instales)
const express = require('express');
const cors = require('cors');
const sql = require('mssql');
const path = require('path');

// 2. INICIALIZAR EXPRESS
// const app = express();
// const PORT = 3000; // Tu servidor correrá en http://localhost:3000

// 3. CONFIGURACIONES BÁSICAS (Middlewares)
// app.use(cors()); // Permitir peticiones de otros lugares
// app.use(express.json()); // Entender datos enviados en formato JSON

// 4. SERVIR LOS ARCHIVOS FRONTEND (HTML, CSS, JS)
// Esto hará que cuando entres a http://localhost:3000 se vea tu página
// app.use(express.static(path.join(__dirname, '../Public')));

// 5. CONFIGURACIÓN DE TU BASE DE DATOS (SQL SERVER)
/**
 * Deberás crear la base de datos en SQL Server Management Studio.
 * Luego, rellenarás estos datos. ¡IMPORTANTE! Para mayor seguridad,
 * en proyectos reales usamos un archivo llamado ".env" para estas contraseñas.
 */
const dbSettings = {
    user: 'TU_USUARIO_DE_SQL',       // Ej: 'sa'
    password: 'Oscar1234.',         // Ej: 'MiContraseña123'
    server: 'localhost',             // Dónde está el servidor SQL alojado
    database: 'EcomerceDB',          // El nombre de la base de datos que crees
    options: {
        encrypt: false,              // Usa 'true' si usas Azure, 'false' para local normal
        trustServerCertificate: true // Requerido para desarrollo local
    }
};

// 6. CREAR TUS RUTAS (Endpoints o APIS)
/**
 * Una "Ruta" o "API" es como un túnel que tu frontend llama para pedir cosas.
 * Por ejemplo, tu código de Javascript del navegador le pedirá a este túnel
 * "¡Dame la lista de Diez Productos!"
 */

// EJEMPLO: Ruta para obtener productos
// app.get('/api/productos', async (req, res) => {
//     try {
//         // a) Conectarnos a SQL Server
//         // const pool = await sql.connect(dbSettings);
        
//         // b) Hacer una consulta (Query)
//         // const result = await pool.request().query('SELECT * FROM Productos;');
        
//         // c) Devolverle la respuesta al Frontend en formato JSON
//         // res.json(result.recordset);
//         
//         // POR AHORA devolverémos datos de prueba estáticos para que vayas practicando:
//         res.json([
//             { id: 1, nombre: 'Producto 1', precio: 15000, desc: 'Un modelo genial' },
//             { id: 2, nombre: 'Producto 2', precio: 25000, desc: 'Increíble calidad' }
//         ]);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Error tratando de obtener productos');
//     }
// });

// 7. ENCENDER EL SERVIDOR
// app.listen(PORT, () => {
//     console.log(`¡Servidor corriendo exitosamente en el puerto ${PORT}!`);
//     console.log(`Abre en tu navegador: http://localhost:${PORT}`);
// });

/**
 * =========================================================================
 * TU TAREA:
 * 1. Lee cuidadosamente todo lo anterior.
 * 2. Instala Node.js en tu computadora si no lo tienes.
 * 3. Ejecuta los comandos "npm" detallados al principio.
 * 4. Descomenta el código de arriba quitando los "//" al inicio de cada línea.
 * 5. Ejecuta tu servidor corriendo `node Server.js` en tu terminal.
 * =========================================================================
 */
