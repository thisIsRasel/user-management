require("dotenv").config();

const connectDB = require("./config/db");
connectDB();

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const corsHandler = require("./middlewares/corsHandler");
app.use(corsHandler);

app.use(express.json());

const indexRoutes = require("./routes/indexRoutes");
app.use("/", indexRoutes);

const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});