const path = require("path");
const loginRoutes = require("./login");
const registerRoutes = require("./register");
const constructMethod = app=>{
    // middleware to login
    app.get("/user",(req,res,next) =>{
        if(req.session.user){
            next();
        }else{            
            res.redirect("/login");
        }
    });
    app.get("/",(req,res) =>{
        if(req.session.user)
            res.redirect("/user");
        else{
            // res.sendFile(path.resolve("index.html"));
            res.redirect("/login");
        }
    });
    app.use("/login", loginRoutes);
    app.use("/register", registerRoutes);
};
module.exports = constructMethod;
