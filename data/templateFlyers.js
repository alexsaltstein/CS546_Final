const mongoCollections = require("./mongoCollections");
const flyers = mongoCollections.templateFlyers;
const uuid = require("node-uuid");

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
    const flyersCollection = await flyers();
    const allFlyers = await flyersCollection.find({}).toArray();

    return allFlyers;
}
let get = async function get(id){
    if (!id) throw "You must provide an id to search for";
    const flyersCollection = await flyers();

    const flyer = await flyersCollection.findOne({_id: id});
    if (flyer === null) throw "No user flyer exists with that id";

    return flyer;
}

let create = async function create(background,elements){
    isValidString(background);
    if (elements.length != 4) throw "You must provide an elements array and it must be of size 4";
    const flyersCollection = await flyers();

    let newFlyer = {
        _id: uuid.v4(),
        background: background,
        elements: elements
    };

    const insertInfo = await flyersCollection.insertOne(newFlyer);
    if(insertInfo.insertedCount === 0) throw "Could not add flyer";

    const newId = insertInfo.insertedId;

    const flyer = await get(newId);
    return flyer;
}

let remove = async function remove(id){
    if (!id) throw "You must provide an id to search for";
    const flyersCollection = await flyers();

    const flyer = await get(id);
    const deletionInfo = await flyersCollection.removeOne({_id: id});

    if (deletionInfo.deletedCount === 0) throw `Could not delete flyer with id of ${id}`;

    return flyer;
}

module.exports = {
    getAll,
    get,
    create,
    remove
};