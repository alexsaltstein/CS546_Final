const templates = require("./data/templateFlyers");
const connection = require("./data/mongoConnection");

const main = async () => {
    
    const db = await connection();
    db.serverConfig.close();
 };
 
 main().catch(error => {
     console.log(error);
 });