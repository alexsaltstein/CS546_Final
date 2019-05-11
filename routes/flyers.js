const path = require("path");
const flyers = require("../data/templateFlyers");
const userFlyers = require("../data/userFlyers");
const users = require("../data/users");
const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
    //todo: render login page first then if user is logged in render main
      const flyerCollection = await flyers.getAll();
      res.status(200).render("home", {
          flyers: flyerCollection
      });
});

router.get("/:id", async (req, res) => {
    try {
        let x = String(req.params.id);
        const flyerCollectionid = await flyers.get(x);
        //res.json(flyerCollectionid);
        res.status(200).render("EditFlyer/editFlyer", {
            id: flyerCollectionid._id,
            background: flyerCollectionid.background,
            element1:  flyerCollectionid.elements[0].text,
            element2:  flyerCollectionid.elements[1].text,
            element3:  flyerCollectionid.elements[2].text,
            element4:  flyerCollectionid.elements[3].text});
    } catch (e) {
        res.sendStatus(500).json({ error: e.toString() || 'Server Error', route: req.originalUrl });
    }

});

router.post("/", async (req,res) =>{
    //console.log("a");
    //console.log(req.body);
    let flyerInfo = req.body;
    let fid = String(flyerInfo.id);
    let flyer = null;
    try{
        //console.log(fid);
        flyer = await userFlyers.get(fid);
        if(flyer != null)
            for(i = 0; i < flyerInfo.elements.length; i++){
                const f = await userFlyers.updateElement(flyer._id, i, flyerInfo.elements[i].text, flyerInfo.elements[i].color);
            }
    }catch(e){
        try{
            flyer = await flyers.get(fid);
            if (flyer != null){
                flyer = await userFlyers.create(flyerInfo.background, flyerInfo.elements);
                await users.addFlyer(String(req.session.userid),String(flyer._id));
                let u = await users.get(String(req.session.userid));
                req.session.flyers = u.flyers;
            }
        }catch(e){
            //console.log(e);
        }
        //console.log(e);
    }
    res.json({success:"success"});
});

module.exports = router;