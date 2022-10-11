const express  =  require('express');

const app = express();
const path = require('path');
const bodyparser = require("body-parser");

require('dotenv').config();
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(bodyparser.urlencoded({ extended : true}))

const port = process.env.PORT || 5000;


app.use('/', require("./server/routes/route")); 
app.set("view engine", "ejs");                  

app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));


app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

