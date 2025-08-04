const { body } = require("express-validator");

const contactFormValidation = [
  body("name")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Minimum length of 3 characters")
    .matches(/^[a-zA-Z]+$/)
    .withMessage("Letters only"),
];

module.exports = contactFormValidation;
