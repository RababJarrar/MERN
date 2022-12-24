const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/dbrabab", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(() => console.log("Established a connection to the database rabab"))
.catch(err => console.log("Something went wrong when connecting to the database", err));
