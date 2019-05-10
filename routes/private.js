const path = require("path");
const flyers = require("../data/userFlyers");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    //todo: render login page first then if user is logged in render main
      const flyerCollection = req.session.flyers;
      let fs = [];
      for (i = 0; i < flyerCollection.length; i++){
            const flyerCollectionid = await flyers.get(flyerCollection[i]);
          fs.push({
              id: flyerCollectionid._id,
            background: flyerCollectionid.background,
            element1:  flyerCollectionid.elements[0].text,
            element2:  flyerCollectionid.elements[1].text,
            element3:  flyerCollectionid.elements[2].text,
            element4:  flyerCollectionid.elements[3].text
          });
      }
      res.status(200).render("myflyers", {
          hasFlyers: fs.length != 0,
          flyers: fs
      });
});

router.get("/:id", async (req, res) => {
    try {
        let x = String(req.params.id);
        const flyerCollectionid = await flyers.get(x);
        //res.json(flyerCollectionid);
        res.status(200).render("EditFlyer/editFlyer", {
            background: flyerCollectionid.background,
            element1:  flyerCollectionid.elements[0].text,
            element2:  flyerCollectionid.elements[1].text,
            element3:  flyerCollectionid.elements[2].text,
            element4:  flyerCollectionid.elements[3].text});
    } catch (e) {
        res.sendStatus(500).json({ error: e.toString() || 'Server Error', route: req.originalUrl });
    }

});

module.exports = router;