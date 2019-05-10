const path = require("path");
const flyers = require("../data/flyers");
// const users = require("./users");

const constructorMethod = app => {
    try {
        app.get("/", async (req, res) => {
            const flyerCollection = await flyers.getAll();
            for (let i = 0; i < flyerCollection.length; i++) {
                const imageName = String(flyerCollection[i].image);
                res.status(200).render("home", { title: "Flyer Creator", image: imageName });
            }
        });

        app.use("*", (req, res) => {
            res.status(404).render("error", { title: "Error Details", MessageOfTheError: "Page not found" });
        });
    } catch (e) {
        console.log("Error:", e);
        res.status(500).json({ error: e.toString() || 'Server Error', route: req.originalUrl });
    }
};

module.exports = constructorMethod;