const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const routes = require("./routes");
const cors = require("cors");
const url =
  "mongodb+srv://yurik52222:04291999@cluster0.hge96yf.mongodb.net/parkomat?retryWrites=true&w=majority";

app.use(cors());
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
app.use(express.json());
app.use('/',routes)

const start = async () => {
    try {
      await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
      app.listen(4003, () => {
        console.log("Server started on port 4003");
      });
   
    } catch (error) {
      console.log(error);
    }
  };

  start()