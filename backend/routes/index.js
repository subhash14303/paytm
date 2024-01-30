const express = require("express");
const User = require("../models/user")
const accountRouter = require("./accounts");
const router = express.Router();
const userRouter = require("./user");



router.use("/user", userRouter);
router.use("/account", accountRouter);





module.exports = router;