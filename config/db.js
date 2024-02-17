const mongoose = require('mongoose');

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const databaseName = process.env.DB_NAME

const connectionUrl = `mongodb://${host}:${port}/${databaseName}`;

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Disable strict query mode to allow more flexible queries
        await mongoose.set("strictQuery", false);
	
        // Connect to the MongoDB database using the provided URL
        await mongoose.connect(connectionUrl);
	console.log("CONNECTION SUCCESS")
        // Log a success message if the connection is successful
        console.log("Connection to the database successful");
    } catch (error) {
        // Log an error message and exit the process if the connection fails
        console.log("Connection to the database failed");
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;