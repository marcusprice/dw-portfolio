const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
const session = require('express-session')
const credentials = require('./config/credentials')
const mongodb = require('./models/mongodb')

//middleware
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(session({
  secret: credentials.secretKey,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

//api routes
const routes = require('./routes')(app)

//serves the app
app.get('*', (req, res) => {
  res.send(__dirname + '/public/index.html')
})

app.listen(port, () => {
  console.log('listening on port ' + port);

  //connect to db
  mongodb.connect((err) => {
    if(err) {
      console.error(err)
    }
  })
})
