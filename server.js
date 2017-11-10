'use strict'

require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

// Constants
app.set('port', process.env.PORT || 3000)

// email
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASS
    }
})

// middleware
app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes
app.post('/mail', (req, res) => {
    const { body } = req

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: process.env.NODEMAILER_EMAIL,
        subject: body.subject,
        text: `
            From: ${body.name}
            Email: ${body.email || 'N/A'}
            Phone: ${body.phone || 'N/A'}

            Subject: ${body.subject || `Website Form Submission from ${body.name}`}

            ${body.message}
        `
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Message sent: ' + info.response)
        }
    })

    res.json(JSON.stringify({
        message: `Message successfully sent to ${mailOptions.to}`
    }))
})

const server = app.listen(app.get('port'), () => {
    const port = server.address().port

    console.log(`Running on port ${port}`)
})
