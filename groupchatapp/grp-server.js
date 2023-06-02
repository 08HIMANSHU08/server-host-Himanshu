
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const chatRoutes = require('./groupchatapp/grp-chat');
const loginRoutes = require('./groupchatapp/grp-login');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/',loginRoutes);
app.use('/',chatRoutes);


app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not Found</h1>');
});

app.listen(3000);