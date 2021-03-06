const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//connecting to DB
mongoose.connect('mongodb://127.0.0.1:27017/registro')
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));

//import routes
const  indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);

//start the server
app.listen(app.get('port'), () => {
    console.log('server on port');
});