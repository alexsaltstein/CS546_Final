const mongoCollections = require("./mongoCollections");
const users = mongoCollections.users;
const xss = require("xss");

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

let getByEmailAndPass = async function getByEmailAndPass(email, hashedPassword){
    isValidString(email);
    isValidString(hashedPassword);
    const usersCollection = await users();

    const user = await usersCollection.findOne({
        $and: [
          { email: email },
          { hashedPassword: hashedPassword }
        ]
    });
    if (user === null) throw "No user exists with that email and hashedPassword";

    return user;
}

let getByEmail = async function getByEmail(email){
    isValidString(email);
    const usersCollection = await users();

    const user = await usersCollection.findOne({email: email});
    if (user === null) throw "No user exists with that email";

    return user;
}

let remove = async function remove(id){
    if (!id) throw "You must provide an id to search for";
    const usersCollection = await users();

    const user = await get(id);
    const deletionInfo = await usersCollection.removeOne({_id: id});

    if (deletionInfo.deletedCount === 0) throw `Could not delete user with id of ${id}`;

    return user;
}

let addFlyer = async function addFlyer(id, flyer){
    if (!id) throw "You must provide an id to add a flyer to";
    isValidString(flyer);
    const usersCollection = await users();

    return usersCollection
      .updateOne({ _id: id }, { $addToSet: { flyers: flyer } })
      .then(function() {
        return get(id);
      });
}

let removeFlyer = async function removeFlyer(id, flyer){
    if (!id) throw "You must provide an id to add a flyer to";
    isValidString(flyer);
    const usersCollection = await users();

    return usersCollection
      .updateOne({ _id: id }, { $pull: { flyers: flyer } })
      .then(function() {
        return get(id);
      });
}

let create = async function create(firstName, lastName, email, hashedPassword){
    isValidString(firstName);
    isValidString(lastName);
    isValidString(email);
    isValidString(hashedPassword);
    const usersCollection = await users();

    let existingUser = await usersCollection.findOne({email: email});
    if(existingUser !== null) throw "User already exists with that email"

    

    let newUser = {
        firstName: xss(firstName),
        lastName: xss(lastName),
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
    getByEmailAndPass,
    getByEmail,
    remove,
    addFlyer,
    removeFlyer,
    create
};
