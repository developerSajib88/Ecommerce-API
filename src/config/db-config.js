const mongoose = require("mongoose");
const config = require("./app-config");

const databaseURL = config.database.url;

const connectDB = async () => {
    try {
        await mongoose.connect(databaseURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Mongoose is connected.");
    } catch (error) {
        console.error("❌ Mongoose connection failed:", error);
        process.exit(1); // Exit process if connection fails
    }
};

// Event listeners for better connection stability
mongoose.connection.on("disconnected", () => console.warn("⚠️ Mongoose disconnected!"));
mongoose.connection.on("error", (err) => console.error("⚠️ Mongoose error:", err));

module.exports = connectDB;
