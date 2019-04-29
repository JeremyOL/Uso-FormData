const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();

// Variables
const SRV_PORT = 5000;
const SRV_PUBLIC = path.join(__dirname, 'public');
const SRV_VIEWS = path.join(__dirname, 'views');
const SRV_ROUTES = path.join(__dirname, 'routes');

// Setting view
app.set('view engine', 'ejs');
app.set('views', SRV_VIEWS);

// Setting body-parser
// For parsing application/json
app.use(bodyParser.json());
// For parsing application/xwww- // form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// For parsing multipart/form-data
app.use(upload.array());

// Setting public 
app.use(express.static(SRV_PUBLIC));

// Setting routes
const routes = require(SRV_ROUTES)
app.use(routes);

// Create server
app.listen(SRV_PORT)
    .on('listening', () => {
        console.log(`Servidor escuchando en el puerto ${SRV_PORT}`);
    })
    .on('error', (error) => {
        console.log(`Ha ocurrido un error ${error.message}`);
    });

module.exports = app;
