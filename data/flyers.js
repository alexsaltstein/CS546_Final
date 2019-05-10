const mongoCollections = require("./mongoCollections");
const flyers = mongoCollections.flyers;
const { ObjectId } = require('mongodb');
const uuid = require("node-uuid");

module.exports = {

    async create() {
        console.log("1");
        const flyerCollection = await flyers();
        let newflyer = {
            _id: uuid.v4(),
            content: '<div class="card-main-div" style="background:url(/public/images/1.png) no-repeat;"><div class="card-text-wrapper"><div class="content-div content-1-div"><span style="border: 1px dashed;" class="edit-custom-text">Happy Eve</span></div></div></div>',
            image:"1.png"
        };
        const insertInfo = await flyerCollection.insertOne(newflyer);
        if (insertInfo.insertedCount === 0) throw "could not create animal";
        const newId = insertInfo.insertedId;
        return newId;
        // const flyer_id = await this.get(String(newId));
        // return flyer_id;
    },

    async getAll() {
        const flyerCollection = await flyers();
        return flyerCollection.find({}).toArray();
    },

    async get(id) {
        const flyerCollection = await flyers();
        const flyerr = await flyerCollection.findOne({ _id: id });
        if (flyerr === null) throw "No flyer with that id";
        return flyerr;
    }

    // async get(id) {
    //     const flyerCollection = await flyers();
    //     const flyer = flyerCollection.findOne({_id: id});\
    //     console.log(flyer);
    // }
};
