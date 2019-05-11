const express = require("express");
const router = express.Router();
const data = require("../data");
const bcrypt = require("bcryptjs");
router.get("/",async (req,res) =>{
    // console.log("/ dir");
    res.render("admin/register", {});
});

router.post("/", async (req,res) =>{
    console.log(req.body);
    let userInfo = req.body;
    let hashedPassword = bcrypt.hashSync(userInfo.password, 3);
    try {
        await data.users.create(userInfo.firstName,userInfo.lastName, userInfo.email, hashedPassword);
        res.redirect("/login");
    } catch (err) {
        // console.log(err);
        res.render("/register",{error: err});
    }
});
router.get("/:email", async (req,res) =>{
    // console.log(req.params.user);
    try {
        let user = await data.users.getByEmail(req.params.user);
        // console.log("a");
        // console.log(user);
        // console.log("a");
        res.sendStatus(200);
    } catch (err) {
        // console.log("a");
        res.sendStatus(404);
    }
});
module.exports = router;