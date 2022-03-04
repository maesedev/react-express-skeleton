const express = require('express');
const app = express();
const Path = require('path');11
const cors = require('cors')
const React = require('react');
const PORT = process.env.PORT || 3030;

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

app.get('/',(req,res)=>{
    res.sendFile(Path.resolve(__dirname,'dist','index.html'))
})


app.listen(PORT,()=>{
    console.log(`======================Listening on port ${PORT}======================`)
});