const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const passport = require('passport');
const passportLocal = require('./config/passport-local');
const session = require('express-session');

app.use(express.static('./assets'));
app.use(express.urlencoded());


app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(port, (err)=>{

    if(err){
        console.log('err')
    }
    console.log(`Server is running on port: ${port}`);

});