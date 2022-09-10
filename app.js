const express = require('express');
const app = express();

const path = require('path');


app.listen(3000, () => console.log('server running'));

app.get('/', (req,res) => {
    res.send('raiz');
})
app.get('/babbage', (req,res) => {
    res.sendFile(path.join(__dirname,'./DH.HEROES/views/babbage.html'))
})
app.get('/berners-lee',(req,res) => {
    res.sendFile(path.join(__dirname,'./DH.HEROES/views/berners-lee.html'))
})
app.get('/clarke',(req,res) => {
    res.send('clarke');
})
app.get('/hamilton',(req,res) => {
    res.send('hamilton');
})
app.get('/lovelace',(req,res) =>{
    res.send('lovelace');
})
app.get('/turing',(req,res) => {
    res.send('turing')
})