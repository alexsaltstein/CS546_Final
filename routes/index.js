
const loginRoutes = require("./login");
const registerRoutes = require("./register");
const flyerRoutes = require("./flyers");


const constructMethod = app=>{
    app.use("/",(req,res,next)=>{
        console.log(req.originalUrl);
        next();
    });
    // middleware to login
    app.get("/user",async (req,res,next) =>{
        if(req.session.user){
            next();
        }else{            
            res.redirect("/login");
        }
    });
    app.get("/",async (req,res) =>{
        if(req.session.user)
            res.redirect("/user");
        else{
            // res.sendFile(path.resolve("index.html"));
            res.redirect("/login");
        }
    });
    app.use("/login", loginRoutes);
    app.use("/register", registerRoutes);
    app.use("/flyer",flyerRoutes);
};

module.exports = constructMethod;
