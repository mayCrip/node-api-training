const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.use('/api/users', routes);

app.listen(process.env.PORT || '3030', () => {
  console.log(`Server started at ${process.env.PORT || '3030'}`);
});