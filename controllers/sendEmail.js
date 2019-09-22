const credentials = require('../config/credentials')
const nodemailer = require('nodemailer')
const contactFormTemplate = require('../src/emails/contact-form-template')

const transporter = nodemailer.createTransport({
  service: credentials.emailService,
  auth: {
    user: credentials.clientEmailUsername,
    pass: credentials.clientEmailPassword
  }
})

module.exports = (data, callback) => {
  const mailOptions = {
    from: 'tarsiereyes.com Web Form',
    replyTo:  data.email,
    to: 'marcusprice88@gmail.com',
    subject: data.subject,
    html: contactFormTemplate(data)
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      callback(error, null)
    } else {
      callback(null, true)
    }
  })
}
