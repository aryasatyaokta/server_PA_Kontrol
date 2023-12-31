const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userController = require('./controller/User');
const morgan = require('morgan');
const { config } = require('dotenv');
const router = require('./router/route');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
config();

mongoose.connect('mongodb+srv://satyaoktaprada:88BdumJEUU8UYNyP@kontrol-pa.2c30sm2.mongodb.net/pa-kontrol', (err) => {
    if (err) {
        console.log('DB Err.');
    } else {
        console.log('DB Connected.');
    }
});

app.use('/api', router);

app.post('/register', userController.register);
app.post('/login', userController.login);

app.listen(3030, () => {
    console.log(`Server Berjalan di portt 3030`);
});
