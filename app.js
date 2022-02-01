const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/products', (req,res)=>{
    res.sendFile(__dirname + '/views/all-products.html');
});

app.get('/kingdom', (req,res)=>{
    res.sendFile(__dirname + '/views/kingdom.html');
});

app.get('/death-note', (req,res)=>{
    res.sendFile(__dirname + '/views/death-note.html');
});

app.get('/castlevania', (req,res)=>{
    res.sendFile(__dirname + '/views/castlevania.html');
});

app.get('/v-de-vendetta', (req,res)=>{
    res.sendFile(__dirname + '/views/v-de-vendetta.html');
});

app.get('/evangelion', (req,res)=>{
    res.sendFile(__dirname + '/views/evangelion.html');
});

app.get('/watchmen', (req,res)=>{
    res.sendFile(__dirname + '/views/watchmen.html');
});

app.get('/sakuracc', (req,res)=>{
    res.sendFile(__dirname + '/views/sakuracc.html');
});

app.get('/spawn', (req,res)=>{
    res.sendFile(__dirname + '/views/spawn.html');
});

app.get('/invincible', (req,res)=>{
    res.sendFile(__dirname + '/views/invincible.html');
});

app.get('/attack-on-titan', (req,res)=>{
    res.sendFile(__dirname + '/views/attack-on-titan.html');
});

app.get('/hellsing', (req,res)=>{
    res.sendFile(__dirname + '/views/hellsing.html');
});

app.get('/spiderman', (req,res)=>{
    res.sendFile(__dirname + '/views/spiderman.html');
});

app.get('/product-cart', (req,res)=>{
    res.sendFile(__dirname + '/views/product-cart.html');
});

app.get('/account', (req,res)=>{
    res.sendFile(__dirname + '/views/account.html');
});

app.get('/about-us', (req,res)=>{
    res.sendFile(__dirname + '/views/about-us.html');
});