const handler = async (req, res) => {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Invalid request method!' });
    }

    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: 'Missing email information!' });
    } 

    const { name, email, subject, body } = JSON.parse(req.body);

    const emailData = {
      from: `${name} <${email}>`,
      to: [`Your Name <your email address>`],
      subject: subject,
      html: body,
    };

    return res.status(200).json({...emailData, ok: true});
};

export default handler;