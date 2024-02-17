# User Service Node.js
This is a simple RESTful API backend built with Node.js, and a database for storing user records.

## Features
- Backend:
  - RESTful API built with Node.js to handle data operations.
  - Manages user creation and retrieval operations.

- Database:
  - Integrated a MongoDB database to store user records efficiently.

- Deployment:
  - Containerized the application using Docker for easy deployment.

- Documentation:
  - Swagger documentation integrated

## Prerequisites
Need to have [docker](https://www.docker.com/get-started/) installed in the machine.

## Installation
Clone the repository and run the following commands in order step by step in project root directory to setup and access the application.

1. Build
```bash
docker-compose up
```

2. Open your browser and go to http://localhost:3000/

## Performance Consideration
Performance can be improved using load balancer for distributing incomming traffic to multiple servers.

## Future Improvements
- Authentication/authorization can be implemented
- Caching can be implemented for api calls
- Retry mechanism can be added
- Logging