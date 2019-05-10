const mongoCollections = require("./mongoCollections");
const flyers = mongoCollections.userFlyers;

let getAll = async function getAll(){
    const flyersCollection = await flyers();
    const allFlyers = await flyersCollection.find({}).toArray();

    return allFlyers;
}

let get = async function get(id){

}

let updateElement = async function updateElement(id, elementid, element){

}

let create = async function create(background){

}

let remove = async function remove(id){

}

module.exports = {
    getAll,
    get,
    updateElement,
    create,
    remove
};