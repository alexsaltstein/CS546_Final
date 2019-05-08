const path = require("path");
// const users = require("./users");

const constructorMethod = app => {
    try {
        app.get("/", (req, res) => {
            res.render("home", { title: "People Finder" })
        });

        app.use("*", (req, res) => {
            res.sendStatus(404).render("error", { title: "Error Details", MessageOfTheError: "Page not found" });
        });
    } catch (e) {
        console.log("Error:", e);
        res.status(500).json({ error: e.toString() || 'Server Error', route: req.originalUrl });
    }
};

module.exports = constructorMethod;