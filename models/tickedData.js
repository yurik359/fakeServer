const mongoose = require("mongoose");
const { Schema } = mongoose;


const ticketDataSchema = new Schema({
    amount:Number,
    currency:String,
    
},{timestamps:true})

// const TicketData = mongoose.model('TicketData', ticketDataSchema,'TicketData');

module.exports = {
    TicketData:mongoose.model('TicketData', ticketDataSchema,'TicketData')
    
}
