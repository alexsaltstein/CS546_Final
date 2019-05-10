const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const data = require("../data");
router.post("/",async (req,res) =>{
    const userInfo = req.body;
    if(!req.body.username || !req.body.password){
        // may use ajax to send a reminder;
        res.render("admin/error",{error:"Empty value"});
        return;
    }else{
        let user;
        try {
            user = await data.users.getByEmail(userInfo.email);
        } catch (err) {
            res.render("admin/error",{error:error});
            return;
        }
        if(user == undefined){
            res.render("admin/error",{error: "Username or password error"});
        }else if(!bcrypt.compareSync(userInfo.password, user.hashedPassword)){
            res.render("admin/error",{error: "Username or password error"});
        }else{
            let newUser = {...user};
            delete newUser.hashedPassword;
            req.session.user = newUser;
            req.redirect("/userInfo");
        }
    }
});
router.get("/", async (req, res) =>{
    res.render("admin/login",{});
});
module.exports = router;
