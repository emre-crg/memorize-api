var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/sets', (req, res) => {
  res.send('setler')
})

app.listen(5000, () => {
  console.log('http://localhost:5000 adresi dinleniyor')
})
