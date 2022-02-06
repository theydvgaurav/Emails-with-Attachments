
const nodemailer = require('nodemailer');
const log = console.log;
const dotenv = require('dotenv');

dotenv.config();
// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.username,  // Email Username imported from .env
        pass:  process.env.username  // Email Password imported from .env
    }
});


const data = [] // TODO: Add JSON data 

data.map((item, index) => {
    setTimeout(() => { // setTimeout used for interval between sending emails
        let mailOptions = {
            from: process.env.username, // TODO: email sender
            to: `${item.Gmail}`, // TODO: email receiver data from JSON mapping
            subject: 'Certificate of Participation - Workshop on Vedic Mathematics',
            text: `Dear Participant,
                    Please find the Attached E-Certificate of participation in the Workshop on Vedic Mathematics.`,
            attachments: [
                { filename: 'Certificate.pdf', path: `./PDF Response for second/PDF Response for second/${item.Number}` } // TODO: replace it with your own path, and filename mapped from JSON Data
            ]
        };


        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                return log('Error occurs', err);
            }
            return log(`Email ${index} sent!!!`);
        });
    }, 10000 * index)
})
