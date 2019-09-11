const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(__dirname + '/public/index.html')
})

app.listen(port, () => {
  console.log('listening on port ' + port);
})
