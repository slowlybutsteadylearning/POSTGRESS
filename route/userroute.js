const express = require("express");
const router = express.Router();

const {userRegister, getAll, userEmail, deleteUserById}= require("./usercontroller");

router.post("/", userRegister)
router.get("/", getAll)
router.get("/user/email", userEmail)
router.delete("/user/:id", deleteUserById)
module.exports= router