const nodemailer = require("nodemailer");
const { validationResult } = require("express-validator");

const submitContactForm = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  const emailMessage = {
    from: {
      name: "Portfolio Contact",
      address: process.env.USER_EMAIL,
    },
    to: process.env.USER_EMAIL,
    replyTo: email,
    subject: `New contact from: ${name}`,
    text: message,
    html: `<p style="white-space: pre-wrap;">${message}</p>`,
  };

  try {
    await transporter.sendMail(emailMessage);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("sendMail Error:", err);
    res.status(500).json({ success: false });
  }
};

module.exports = {
  submitContactForm,
};
