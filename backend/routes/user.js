const express = require("express");
const User = require("../models/user")
const Account = require("../models/accounts")
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
//const { authMiddleware } = require("../middlewares/autherization");


const signupBody = zod.object({
    userName: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
    password:zod.string()

});
router.get("/test",async (req,res)=>{
    const user = User.find({});
    console.log(user);
    return res.json({});
})
router.post("/signup",async (req,res)=>{
    console.log(req.body);
    const {success} = signupBody.safeParse(req.body);
    if(!success)
    {
        return res.status(411).json({
            message: "Email already taken / Incorrect input"
        })
    }
    const user_already_exits = await User.findOne({
        username: req.body.userName
    })
    if(user_already_exits)
    {
        return res.status(411).json({
            messge:"email already exits"
        })
    }

    //if all goes well
    const user = await User.create({
        username: req.body.userName,
        
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        password: req.body.password,
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
    userName: zod.string().email(),
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
        username:req.body.userName,
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

// const updateBody = zod.object({
//     password: zod.string().optional(),
//     firstName:zod.string().optional(),
//     lastName: zod.string().optional,
// })

// router.put("/",authMiddleware,async(req,res)=>{
//     const {success} = updateBody.safeParse(req.body)
//     if(!success)
//     {
//         res.status(411).json({
//             message:"Error while updating information"
//         })
//     }
//     await User.updateOne(req.body, {
//         id: req.userId
//     })

//     res.json({
//         message: "updated succesfully"
//     })
// })

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


module.exports = router;