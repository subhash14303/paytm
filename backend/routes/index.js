const express = require("express");
const User = require("../models/user")
const accountRouter = require("./account");
const router = express.Router();


router.use("/user", userRouter);
router.use("/account", accountRouter);





modules.export = router;