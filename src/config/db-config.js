const mongoose = require("mongoose");
const config = require("./app-config");

const databaseURL = config.database.url;

mongoose.connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("✅ Mongoose is connected.");
}).catch((error)=>{
    console.error("Mongoose isn't connected.",error);
    process.exit(1);
});
