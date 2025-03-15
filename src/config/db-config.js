const { default: mongoose } = require("mongoose");
const { dev } = require("./app-config");

const database = dev.database.url;

module.exports.connectDB = mongoose.connect(database).then(()=>{
    console.log("Mongoose is connected.");
}).catch((error)=>{
    console.log("Mongoose Connection Failed!");
    console.log(error);
})