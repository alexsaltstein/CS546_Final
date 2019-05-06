const mongoCollections = require("./mongoCollections");
const users = mongoCollections.users;

//checks to see if string is a valid string
function isValidString(string){
    if (string === undefined){
        throw "Input is not a valid string";
    }
    if (typeof(string) !== "string"){
        throw "Input is not a valid string";
    }
    return true;
}

let getAll = async function getAll(){
    const usersCollection = await users();
    const allUsers = await usersCollection.find({}).toArray();

    return allUsers;
}

let get = async function get(id){
    if (!id) throw "You must provide an id to search for";
    const usersCollection = await users();

    const user = await usersCollection.findOne({_id: id});
    if (user === null) throw "No user exists with that id";

    return user;
}

let create = async function create(firstName, lastName, email, hashedPassword){
    isValidString(firstName);
    isValidString(lastName);
    isValidString(email);
    isValidString(hashedPassword);
    const usersCollection = await users();

    let newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        hashedPassword: hashedPassword,
        flyers: []
    };

    const insertInfo = await usersCollection.insertOne(newUser);
    if(insertInfo.insertedCount === 0) throw "Could not add user";

    const newId = insertInfo.insertedId;

    const user = await get(newId);
    return user;
}


module.exports = {
    getAll,
    get,
    create
};