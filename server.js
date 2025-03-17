const app = require("./src/app");
const config = require("./src/config/app-config");
require("./src/config/db-config");

const PORT = config.app.port;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});