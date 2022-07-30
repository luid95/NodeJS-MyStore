const express = require('express');
const faker = require('faker');
const app = express();

const port = 3000;

app.get('/', (req, res) => {

  res.send('Hola mi server en express');

});

app.get('/new-route', (req, res) => {

  res.send('Hola, soy una nueva ruta');

});

app.get('/products', (req, res) => {

  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {

    products.push({
      name:   faker.commerce.productName(),
      price:  parseInt( faker.commerce.price(), 10 ),
      image:  faker.image.imageUrl(),
    });
  }

  res.json(products);

});

// todos los endpoints especificos debe ir antes de los endpoints dinamicos
app.get('/products/filter', (req, res) => {

  res.send('Yo soy un filter');

});

app.get('/products/:id', (req, res) => {

  const { id } = req.params;

  res.json([
    {
      id,
      name: 'Producto 1',
      price: 1000,
    }
  ]);

});


//parametros query
app.get('/users/', (req, res) => {

  const { limit, offset } = req.query;

  if(limit && offset){

    res.json([
      {
        limit,
        offset,
      }
    ]);
  }else{

    res.send('No hay parametros');
  }


});

//Recibir parametros
app.get('/categories/:idc/products/:idp', (req, res) => {

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

app.listen(port, () => {
  console.log('Mi port: ' + port);
});
