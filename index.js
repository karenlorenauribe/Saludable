const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const routes = require('./src/routes/routes');
app.use('/api/',routes);

app.listen(3000, () => {
  console.log('server started');
});