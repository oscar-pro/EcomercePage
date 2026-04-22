// 1. IMPORTAR
const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const path = require('path');

// 2. INICIALIZAR
const app = express();
const PORT = 3000;

// 3. MIDDLEWARES
app.use(cors());
app.use(express.json());

// 4. BASE DE DATOS
const dbSettings = {
    user: 'sa',
    password: 'Oscar1234.',
    server: 'DESKTOP-FUJHV07\\SQLEXPRESS',
    database: 'EcomerceDB',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

// 5. RUTAS (ANTES del static)
app.get('/api/UserData', async (req, res) => {
    try {
        const pool = await sql.connect(dbSettings);
        const result = await pool.request().query('SELECT * FROM UserData;');

        res.json(result.recordset);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error tratando de obtener productos');
    }
});

//Creación De Usuarios
app.post('api/UserData', async (req, res) => {
    const { UserName } = req.body;
    try {
        const pool = await sql.connect(dbSettings);

        await pool.request()
            .input('UserName', UserName)
            .query('INSERT INTO UserData (UserName) VALUES (@UserName)');

        res.send("Usuario creado");
    } catch (error) {
        res.status(500).send(error);
    }
});


// 6. STATIC (DESPUÉS de rutas)
app.use(express.static(path.join(__dirname, '../Public')));

// 7. INICIAR SERVIDOR (AL FINAL SIEMPRE)
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});