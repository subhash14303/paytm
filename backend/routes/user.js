const express = require("express");
const User = require("../models/user")
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middlewares/autherization");

const signupBody = zod.object({
    username: zod.string().email,
    firstName: zod.string(),
    lastName: zod.string(),
    password:zod.string()

});
router.post("/signup",async (req,res)=>{
    const {succes} = signupBody.safeParse(req.body);
    if(!success)
    {
        return res.status(411).json({
            message: "Email already taken / Incorrect input"
        })
    }
    const user_already_exits = await User.findOne({
        username:req.body.username
    })
    if(user_already_exits)
    {
        return res.status(411).json({
            messge:"email already exits"
        })
    }

    //if all goes well
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    const userId = user._id;

    //creating and account for the user

    await Account.create({
        userId,
        balance: 1 + Math.random()*10000
    });

    const token = jwt.sign({
        userId
    },JWT_SECRET);
    res.json({
        message: "User created successfully",
        token: token
    })
})

const sigininBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})
router.post("/signin",async (req,res)=>{
    const {success} = sigininBody.safeParse(req.body);
    if(!success)
    {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username:req.body.username,
        password: req.body.password
    });

    if(user){
        const token = jwt.sign({
            userId: user._id
        },JWT_SECRET);

        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })

});

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName:zod.string().optional(),
    lastName: zod.string().optional,
})

router.put("/",authMiddleware,async(req,res)=>{
    const {success} = updateBody.safeParse(req.body)
    if(!success)
    {
        res.status(411).json({
            message:"Error while updating information"
        })
    }
    await User.updateOne(req.body, {
        id: req.userId
    })

    res.json({
        message: "updated succesfully"
    })
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})


modules.export = router;