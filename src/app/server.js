const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
  const { name, phone } = req.body;

  // Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use any other email service
    auth: {
      user: 'pragathir564@gmail.com', // Your email
      pass: 'Pragathi@564++'   // Your email password
    }
  });

  const mailOptions = {
    from: 'pragathir564@gmail.com',
    to: 'shansudhar209@gmail.com',  // Recipient's email
    subject: 'Contact Form Submission',
    text: `You have a new contact form submission:\n\nName: ${name}\nPhone: ${phone}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
