const handler = async (req, res) => {
  return new Promise((resolve) => {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Invalid request method!' });
    }

    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: 'Missing email information!' });
    }

    const mailgun = require('mailgun-js')({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    });

    const { name, email, subject, body } = JSON.parse(req.body);

    const emailData = {
      from: `${name} <${email}>`,
      to: [`Rachel Nelson-Schille <rachelnelsonschille@gmail.com>`],
      subject: subject,
      html: body,
    };

    mailgun.messages().send(emailData, (error, body) => {
      if (error) {
        console.log(error);
        res.status(400).json({ ok: false, error });
        return resolve();
      }
      res.status(200).json({ ok: true });
      return resolve();
    });
  });
};

export default handler;