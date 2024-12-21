const express = require('express');
const cors = require('cors');
require('dotenv').config();

const ProductsRoutes = require('./routes/ProductsRoutes');
const UsersRoutes = require('./routes/UsersRoutes');
const OrderRoutes = require('./routes/OrderRoutes');
const StatesRoutes = require('./routes/StatesRoutes');



const app = express();
app.use(cors());
app.use(express.json());


app.use('/', ProductsRoutes);
app.use('/', UsersRoutes);
app.use('/', OrderRoutes);
app.use('/', StatesRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;