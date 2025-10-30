const express = require('express')
const path = require('path')

const app = express()

//Read
app.get('/', (req, res) => {
    res.send('<h1>academia</h1>')
})

app.get('/pagina1', (req, res) => {
    res.send('<h1>essa é a página 1</h1>')
})

app.get('/pagina2:id', (req, res) => {
    res.send(req.params.id)
})

app.get('/pagina3', (req, res) => {
    res.sendFile(__dirname, 'index.html')
})

//Post
app.post('/pagina1', (req, res) => {
    const dados = req.body
    res.send('<h1>Postado com sucesso</h1>')
})

//Update
app.put('/pagina1/:id', (req, res) => {
    res.send(req.params.id)
})

app.patch('/', (req, res) => {
    res.send(req.params.id)
})

app.listen(3000)