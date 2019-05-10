const express = require("express");
const router = express.Router();
const xss = require("xss");
const data = require("../data");
router.get("/",async (req,res) =>{
    // console.log("/ dir");
    res.render("admin/register", {});
});
router.get("/:user", async (req,res) =>{
    console.log(req.params.user);
    
    await data.userData.addUser(req.params.user,"password","guangqi","qing","gqing@stevens.edu");
    res.json({hello:"world"});
});
router.post("/", async (req,res) =>{
    
});
router.post("/:user", async (req,res) =>{
    console.log(req.params.user);
    const userData = data.userData;
    let user = await userData.findUser(req.params.user);
    if(user)
        res.send({message:"true"});
    else
        res.send({message:"false"});
});
module.exports = router;
