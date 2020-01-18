var express = require('express');
var app = express();

let customers = [
  {
    id: 1,
    name: 'Martian Firma',
    budget: 100000.0,
    budget_spent: 4500.0,
    date_of_first_purchase: '2119-07-07'
  },
  {
    id: 2,
    name: 'Solar Firma',
    budget: 1123.22,
    budget_spent: 451.3754,
    date_of_first_purchase: '2120-01-14'
  }
];

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
  await timeout(1000);
  res.send(customers);
});

app.listen(3001, function() {
  console.log('Example app listening on port 3001!');
});
