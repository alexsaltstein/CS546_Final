const express = require("express");
const router = express.Router();
const xss = require("xss");
const data = require("../data");
router.get("/",(req,res) =>{
    res.render("admin/register", {});
});
router.post("/", (req,res) =>{
    
});
router.post("/:user", async (req,res) =>{
    const userData = data.userData;
    res.send(req.params.user);
});
module.exports = router;
