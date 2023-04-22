const User = require('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

//@desc Get all users
//@route GET /user
//@access Private

const getAllUsers = asyncHandler(async (req, res) => {

})

//@desc Create a new user
//@route POST /user
//@access Private

const createNewUser = asyncHandler(async (req, res) => {

})

//@desc Update a new user
//@route PATCH /user
//@access Private

const updateUser = asyncHandler(async (req, res) => {

})

//@desc Delete a user
//@route DELETE /user
//@access Private

const deleteUser = asyncHandler(async (req, res) => {

})

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}