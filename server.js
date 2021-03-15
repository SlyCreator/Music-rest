const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app     = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",(req,res) =>{
    res.json({message:"Welcome to music app"});
})

const PORT = process.env.PORT || 8222

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})