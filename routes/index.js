const express = require('express')
const route = express.Router();


route.get('/', (req,res)=>{


    return res.render('index',{

        title:'Login Page'
    })
});

module.exports = route;