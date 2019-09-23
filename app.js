const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')

//middleware
app.use(bodyParser.json())
app.use(express.static('public'))

//api routes
const routes = require('./routes')(app)

//serves the app
app.get('*', (req, res) => {
  res.send(__dirname + '/public/index.html')
})

app.listen(port, () => {
  console.log('listening on port ' + port);
})
