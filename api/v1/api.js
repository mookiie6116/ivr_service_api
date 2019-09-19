const express = require('express');
const router = express.Router();
const moment = require('moment');
moment.locale('th');

router.use("/service", require("./mapping"));

module.exports = router;