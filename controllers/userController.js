const asyncHandler = require("../middlewares/asyncHandler");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

const {
    userAlreadyExistsMessage,
    userRegistrationSuccessfulMessage,
    userNotFoundMessage,
} = require("../utils/messages.json");

const createUser = asyncHandler(async (req, res, next) => {
    const { name, email } = req.body;

    let user = await User.findOne({email});
    if (user) return next(new ErrorResponse(userAlreadyExistsMessage, 409));

    const newUser = new User({
        name,
        email
    });

    user = await newUser.save();

    res.status(201).json({
        success: true,
        data: {
            message: userRegistrationSuccessfulMessage
        }
    });
});

const getUsers = asyncHandler(async (req, res, next) => {
    const page = req.query.page || 1;
    if (page < 1) { page = 1; }

    const limit = 10;
    const skip = limit * (page - 1);
    let users = await User.find().limit(limit).skip(skip);
    let totalUsers = await User.countDocuments({});
    
    res.status(200).json({
        data: users,
        total: totalUsers
    });
});

const getUser = asyncHandler(async (req, res, next) => {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
        return next(new ErrorResponse(userNotFoundMessage, 404));
    }

    res.status(200).json(user);
});

module.exports = { createUser, getUsers, getUser };