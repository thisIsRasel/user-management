const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'API documentation of user service',
        },
    },
    apis: ['./routes/*.js'], // Path to the API routes folder
};

const specs = swaggerJsdoc(options);

module.exports = specs;