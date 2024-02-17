const swaggerUi = require('swagger-ui-express');
const specs = require('../swagger');
const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/v1/users", userRoutes);

router.use('/', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = router;