const express = require('express');
var cors = require('cors');
const app = express();

require('dotenv').config();
app.use(cors());

app.use(express.json());
const SSLCommerzPayment = require('sslcommerz-lts');
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSWORD;
const is_live = false;

const port = 3000;

app.get('/', (req, res) => {
  res.send(store_id + store_passwd);
});

app.post('/test', async (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
