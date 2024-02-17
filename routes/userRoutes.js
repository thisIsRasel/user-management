const express = require("express");
const router = express.Router();
const { createUser, getUsers, getUser } = require("../controllers/userController");

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get list of users data
 *     description: Retrieve list of users from the server
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         default: 1
 *         description: The page number
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/', getUsers);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get a single user by id
 *     description: Retrieve a single user from the server
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to get
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Not found
 */
router.get('/:id', getUser);

/** @swagger
 * /api/v1/users:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user on the server
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request, invalid input
 */
router.post('/', createUser);

module.exports = router;