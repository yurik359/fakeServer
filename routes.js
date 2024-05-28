const path = require("path");
const express = require("express");
const router = express.Router();

const {sendTicketData} = require("./controllers/sendTicketData")


router.get('/sendTicketData',sendTicketData)
 

module.exports = router;