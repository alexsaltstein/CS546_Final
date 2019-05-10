const mongoCollections = require("./mongoCollections");
const users = mongoCollections.users;
const flyers = mongoCollections.flyers;
const {ObjectId} = require("mongodb");
const bcrypt = require("bcryptjs");
const xss = require("xss");
create = async (username, password, firstName, lastName, email) =>{
    if(!username || typeof username != 'string')
        throw "Invalid username";
    if(!password || typeof password != 'string')
        throw "Invalid password";
    if(!firstName || typeof firstName != 'string')
        throw "Invalid firstName";
    if(!lastName || typeof lastName != 'string')
        throw "Invalid lastName";
    let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(typeof email != 'string' || valid.test(email.toLowerCase()) == false)
        throw "Invalid email";
    const addedUser = {
        username: xss(username),
        hashedPassword: bcrypt.hashSync(password,16),
        firstName: xss(firstName),
        lastName: xss(lastName),
        email: xss(email),
        flyers:[]
    };
    const usersCollection = await users();
    let info = await usersCollection.insertOne(addedUser);
    if(info.insertedCount == 0)
        throw 'Database insert error';
    return get(username);
};
get = async(username) =>{
    if(!username || typeof username != 'string')
        throw 'Invalid username';
    const usersCollection = await users();
    console.log(username);
    let user = null;
    try{
        user = await usersCollection.find({username: username}).limit(1).next();
    }catch(err){
        throw "Database error";
    }
    if(user == null)
        return undefined;
    return user;
};

addFlyer= async(username,flyer) => {
    return;
};

module.exports={
    addUser:create,
    findUser:get
};

// create("hello","password","Guangqi","Qing","gqing@stevens.edu");
