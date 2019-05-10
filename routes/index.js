const path = require("path");
const flyers = require("../data/templateFlyers");
// const users = require("./users");

const constructorMethod = app => {
    try {
        app.get("/", async (req, res) => {
            const flyerCollection = await flyers.getAll();
            res.status(200).render("home", {
                flyers: flyerCollection
            });
            // for (let i = 0; i < flyerCollection.length; i++) {
            //     console.log(flyerCollection[i]._id);
            //     const imageName = String(flyerCollection[i].image);
            //     res.status(200).render("home", { 
            //         title: "Flyer Creator", 
            //         image: imageName,
            //         id: flyerCollection[i]._id
            // });
            // }
        });

        app.get("/editFlyer/:id", async (req, res) => {
            try {
                let x = String(req.params.id);
                console.log(x);
                const flyerCollectionid = await flyers.get(x);
                console.log(flyerCollectionid.content);
                //res.json(flyerCollectionid);
                res.status(200).render("EditFlyer/editFlyer", { flyer1: flyerCollectionid.content });
            } catch (e) {
                res.sendStatus(500).json({ error: e.toString() || 'Server Error', route: req.originalUrl });
            }

        });

        // app.use("/editFlyer", async (req, res) => {
        //     const flyerInfo = req.body;
        //     const flyerCollectionId = await flyers.get(String(req.params.id));
        //     console.log(flyerCollectionId);
        // });

         app.get("/logout", async (req, res) => {
            res.status(200).render("logout");
           
        });
        
        app.use("*", (req, res) => {
            res.status(404).render("EditFlyer/editFlyer");
        });

    } catch (e) {
        console.log("Error:", e);
        res.status(500).json({ error: e.toString() || 'Server Error', route: req.originalUrl });
    }
};

module.exports = constructorMethod;
