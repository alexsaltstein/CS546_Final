const mongoCollections = require("./mongoCollections");
const flyers = mongoCollections.flyers;

let getAll = async function getAll(){
    const flyersCollection = await flyers();
    const allFlyers = await flyersCollection.find({}).toArray();

    return allFlyers;
}

module.exports = {
    getAll
};