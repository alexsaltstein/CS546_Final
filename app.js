//I pledge my honor that I have abided by the Stevens honor system.
//Alex Saltstein
const users = require("./data/users");
const flyers = require("./data/userFlyers");
const templates = require("./data/templateFlyers");
const connection = require("./data/mongoConnection");

const main = async () => {
    const db = await connection();
    db.serverConfig.close();
};

main().catch(error => {
    console.log(error);
});