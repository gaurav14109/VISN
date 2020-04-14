const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const passportLocal = require('./config/passport-local');
const sassMiddleware = require('node-sass-middleware')
const session = require('express-session');

app.use(express.static('./assets'));
app.use(expressLayouts); //This for Setting partial in webpage
app.use(express.urlencoded());
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));
app.set('layout extractStyles', true);//this for setting css to particular page
app.set('layout extractScripts', true);//javacript for particular page.

app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(port, (err)=>{

    if(err){
        console.log('err')
    }
    console.log(`Server is running on port: ${port}`);

});