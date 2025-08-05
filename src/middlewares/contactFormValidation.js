const { body } = require("express-validator");

const contactFormValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is empty")
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage("Name must contain letters, spaces, apostrophes, or hyphens"),
  
  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email"),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is empty")
    .isLength({ min: 10, max: 1000 })
    .withMessage("Message should be between 10 and 1000 characters"),
];

module.exports = contactFormValidation;
