const sendEmail = require('./controllers/sendEmail')

module.exports = (app) => {
  //sends an email
  app.post('/sendEmail', (req, res) => {
    sendEmail(req.body, (error, result) => {
      if(error) {
        res.json({emailSent: false, error: error.toString()})
      } else {
        res.json({emailSent: true})
      }
    });
  })
}
