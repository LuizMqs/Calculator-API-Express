const express = require('express');

const app = express();

const port = 8000

app.get('/calculador/soma/:valor1/:valor2', (req, res) => {
    const valor1 = Number(req.params.valor1)
    const valor2 = Number(req.params.valor2)

    res.json({'resultado': valor1 + valor2})
})

app.get('/calculador/subtracao/:valor1/:valor2', (req, res) => {
    const valor1 = Number(req.params.valor1)
    const valor2 = Number(req.params.valor2)

    res.json({'resultado': valor1 - valor2})
})

app.get('/calculador/multiplicacao/:valor1/:valor2', (req, res) => {
    const valor1 = Number(req.params.valor1)
    const valor2 = Number(req.params.valor2)

    res.json({'resultado': valor1 * valor2})
})

app.get('/calculador/divisao/:valor1/:valor2', (req, res) => {
    const valor1 = Number(req.params.valor1)
    const valor2 = Number(req.params.valor2)

    res.json({'resultado': valor1 / valor2})
})

app.listen(port, () => {
    console.log(`calculador app listening on port ${port}`)
})