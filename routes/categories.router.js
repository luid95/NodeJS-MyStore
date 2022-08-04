const express = require('express');

const router = express.Router();

//Recibir parametros
router.get('/categories/:idc/products/:idp', (req, res) => {

  const { idc, idp } = req.params;

  res.json([
    {
      idc,
      idp,
      name: 'Producto 2',
      price: 2000,
    }
  ]);

});

module.exports = router;
