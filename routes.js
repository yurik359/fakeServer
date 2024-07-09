const path = require("path");
const express = require("express");
const router = express.Router();

const {sendTicketData,postTicket} = require("./controllers/sendTicketData")


router.get('/sendTicketData',sendTicketData)
router.post('/postTicket',postTicket)
 

module.exports = router;