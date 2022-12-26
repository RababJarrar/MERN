const express = require('express');
const cors = require('cors');        //cors: to connect 2 ports togethor (client, server)
const app = express();

require('./config/mongoose.config');

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

require('./routes/player.routes')(app);
app.listen(8000,() =>{ console.log("port 8000")});