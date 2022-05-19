const express = require('express');
const router = express.Router();

const MailBoxController = require('../controllers/MailBoxController');

router.route('/')
    .get(MailBoxController.getLetters)
    .post(MailBoxController.postLetter)
    .patch(MailBoxController.patchLetter)
    .delete(MailBoxController.deleteLetter)

module.exports = router;