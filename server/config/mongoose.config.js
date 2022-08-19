const mongoose = require('mongoose');

const dbName = "MoreConcertsDB";
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {console.log(`You are connected to ${dbName}!`)})
    .catch((err) => {console.log("Something went wrong connecting to your database!", err)});