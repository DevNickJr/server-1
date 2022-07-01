// const http = require('http');
// var _ = require('lodash');

// http.createServer(function (req, res) {
//   console.log(_.random(20))
//   // res.writeHead(200, {'Content-Type': 'text/html'});
//   // res.end('Hello World!');
// }).listen(8080, console.log('listening on port 3000'));

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('images'))
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: __dirname})
})
app.get('/about', (req, res) => {
  res.sendFile('./about.html', {root: __dirname})
})
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})
app.use((req, res) => {
  res.status(404).send('<p>404 Page</p>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
