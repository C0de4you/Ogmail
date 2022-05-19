const express = require('express');
const router = express.Router();

const AuthRouter = require('./routers/AuthRouter');
const MailBoxRouter = require('./routers/MailBoxRouter');

router.use('/login', AuthRouter);
router.use('/mailbox', MailBoxRouter);

module.exports = router;