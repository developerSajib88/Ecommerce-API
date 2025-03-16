const app = require("./src/app");
const config = require("./src/config/app-config");
const connectDB = require("./src/config/db-config");

const PORT = config.app.port;

// Connect to the database
connectDB()
  .then(() => {
    console.log("Database connected successfully");

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
    process.exit(1); // Exit the process if the database connection fails
  });

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  process.exit(1);
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});