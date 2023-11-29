const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'service email',
    auth: {
        user: 'votre_email@gmail.com',
        pass: 'votre_mot_de_passe'
    }
});

const mailOptions = {
    from: 'votre_email@gmail.com',
    to: 'destinataire@example.com',
    subject: 'Test d\'email depuis Node.js',
    text: 'Bonjour, ceci est un email de test envoyé depuis Node.js.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email envoyé: ' + info.response);
    }
});
