const { TicketData } = require("../models/tickedData");

module.exports = {
  sendTicketData: async (req, res) => {
    try {
      const {ticketId }= req.query
console.log(ticketId)
      

      
      const result = await TicketData.findById(ticketId);
    
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
};

