const templates = require("./data/templateFlyers");
const connection = require("./data/mongoConnection");

const main = async () => {
    const getTemplates = await templates.getAll();
    if (getTemplates.size != 0) throw "templates is already seeded";
    
    const db = await connection();
    db.serverConfig.close();
 };
 
 main().catch(error => {
     console.log(error);
 });