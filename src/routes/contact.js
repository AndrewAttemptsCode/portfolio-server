const { Router } = require("express");
const contactFormValidation = require("../middlewares/contactFormValidation");
const controllers = require("../controllers/index");

const router = Router();

router.post("/", contactFormValidation, controllers.contact.submitContactForm);

module.exports = router;
