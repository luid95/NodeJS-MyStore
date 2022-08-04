const express = require('express');
const router = require('./routes/index');
const app = express();

const port = 3000;

app.use(express.json());

router.routerApi(app);

app.listen(port, () => {
  console.log('Mi port: ' + port);
});
