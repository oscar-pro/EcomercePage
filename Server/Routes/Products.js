const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([{ id: 1, nombre: 'Laptop' }]);
});

module.exports = router;

// Queda pendiente las rutas para 
// el producto y el usuario