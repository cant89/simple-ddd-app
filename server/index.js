const express = require('express');
const app = express();

const DB = require('./db');

let { customers } = DB;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());

app.get('/api/customers', function(req, res) {
  res.send(customers);
});

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

app.post('/api/customer/:id', async function(req, res) {
  const { id, ...newData } = req.body;
  customers = customers.map(cust =>
    cust.id === id ? { ...cust, ...newData } : cust
  );
  // delay response only for showcasing the loading on FE
  await timeout(1000);
  res.send(customers);
});

app.listen(3001, function() {
  console.log('Example app listening on port 3001!');
});
