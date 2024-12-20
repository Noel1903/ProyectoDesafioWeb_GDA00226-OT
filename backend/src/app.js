const express = require('express');
const cors = require('cors');
require('dotenv').config();

const ProductsRoutes = require('./routes/ProductsRoutes');
const app = express();
app.use(cors());
app.use(express.json());


app.use('/', ProductsRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;