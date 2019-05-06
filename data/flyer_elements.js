const mongoCollections = require("./mongoCollections");
const flyer_elements = mongoCollections.flyer_elements;

let getAll = async function getAll(){
    const flyer_elementsCollection = await flyer_elements();
    const allFlyer_elements = await flyer_elementsCollection.find({}).toArray();

    return allFlyer_elements;
}

module.exports = {
    getAll
};