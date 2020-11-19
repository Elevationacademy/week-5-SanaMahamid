const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/', function(request, response){
    response.send(`Server is up and running smoothly`)
})

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/priceCheck/:name', function(request, response){
    let name = request.params.name
    let price = {price: null}
    let item = store.find(item => item.name === name)
    if(item){
        price.price = item.price
    }
    response.send(price)
})

app.get('/buy/:name', function(request, response){
    let name = request.params.name
    let item = store.find(item => item.name === name)
    if(item){
        item.inventory--
    }
    response.send( response.send(`Congrats! You've just bought ${item.name} for ${item.price}. There are ${item.inventory} left in stock.`))
})

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})

