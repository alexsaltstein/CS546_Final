const mongoCollections = require("./mongoCollections");
const flyers = mongoCollections.userFlyers;
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

//checks to see if num is a valid number
function isValidNum(num){
    if (typeof(num) !== "number"){
        throw "Input is not a valid number";
    }
    if (isNaN(num)){
        throw "Input is not a number";
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

let updateElement = async function updateElement(id, elementid, text, color, font){
    if (!id) throw "You must provide an id to search for";
    if (!isValidNum(elementid) || elementid < 0 || elementid > 3) throw "You must provide an element id to update";
    isValidString(text);
    isValidString(color);
    isValidString(font);
    
    const flyersCollection = await flyers();

    const flyer = await get(id);
    
    let newElements = flyer.elements;
    newElements[elementid] = {
        text: text,
        color: color,
        size: size,
        font: font
    };

    return flyersCollection
      .updateOne({ _id: id }, { $set: { elements: newElements } })
      .then(function() {
        return get(id);
    });

}

let create = async function create(background, elements){
    isValidString(background);
    if(!elements) throw "You must provide elements";
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
    updateElement,
    create,
    remove
};