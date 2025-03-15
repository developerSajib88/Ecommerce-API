const { dev } = require("./src/config/app-config");
const app = require("./src/app");
require("./src/config/db-config");
const PORT = dev.app.port;

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});