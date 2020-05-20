const express = require("express");
const app = express();
const cors = require("cors");



app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

const AllMyUserRoutes = require("./server/routes/products.routes");
AllMyUserRoutes(app);

require("./server/config/database.config");
require("./server/routes/products.routes")(app);

app.listen(8000, () => console.log("Localhost connected"));
