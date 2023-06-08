const express = require("express");
const path = require("path");
const app = express()

app.use(express.static(path.join(__dirname, "/public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/home.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/login.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.listen(3002, function (){
    console.log("servidor corriendo");
});