const registerRoutes = require("./register");
const flyerRoutes = require("./flyers");
const privateRoutes = require("./private");
const session = require("express-session");
const users = require("../data/users");
const bcrypt = require("bcrypt");


const constructMethod = app=>{
    app.use(session({
        name: 'AuthCookie',
        secret: 'some secret string!',
        resave: false,
        saveUninitialized: true
      }));

    app.use("/flyers", function(req, res, next) {
        if (req.session.auth) {
          next();
        }else{
          res.status(403).send("The user is not logged in");
        }
    });

    app.use("/private", function(req, res, next) {
        if (req.session.auth) {
          next();
        }else{
          res.status(403).send("The user is not logged in");
        }
    });
    
    app.get("/", (req,res) => {
        if(req.session.auth){
            res.redirect('/flyers');
        }else{
            res.render("admin/login", {
                hasErrors: false
            });
        }
    });

    app.get("/login", (req,res) => {
        if(req.session.auth){
            res.redirect('/flyers');
        }else{
            res.render("admin/login", {
                hasErrors: false
            });
        }
    });
    
    app.post("/login", async (req, res) =>{
        let loginData = req.body;
        if (!loginData.username || !loginData.password){
          res.render("admin/login", {
            hasErrors: true
          });
          res.status(401);
          return;
        }
      
        //loops through usersData and checks to see if valid username and
        //password combo is found if it is it sets the user to be that one
        let user = null;
        try{
            user = await users.getByEmail(loginData.username);
            if(user){
                passwordCorrect = await bcrypt.compare(loginData.password, user.hashedPassword);
                if(!passwordCorrect){
                    user = null;
                }
            }
        }catch(e){
            console.log(e);
            return;
        }
        
        //set the session elements to be all the data of the user
        if (user){
          req.session.auth = true;
          req.session.userid = user._id;
          req.session.username = user.username;
          req.session.firstName = user.firstName;
          req.session.lastName = user.lastName;
          req.session.profession = user.profession;
          req.session.bio = user.bio;
          res.redirect('/flyers');
        }else{
          res.render("admin/login", {
            hasErrors: true
          });
          res.status(401);
          return;
        }
      });

    app.get("/logout", (req,res) =>{
        req.session.destroy();
        res.render("templates/logout");
    });
    app.use("/register", registerRoutes);
    app.use("/flyers",flyerRoutes);
    app.use("/private", privateRoutes);
    
};

module.exports = constructMethod;
