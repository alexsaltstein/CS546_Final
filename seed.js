const templates = require("./data/templateFlyers");
const connection = require("./data/mongoConnection");

const main = async () => {
    const db = await connection();
    await db.dropDatabase();
    const elements = [
        {
            text: "hi",
            size: 10,
            color: "#000000"
        },
        {
            text: "hi",
            size: 10,
            color: "#000000"
        },
        {
            text: "hi",
            size: 10,
            color: "#000000"
        },
        {
            text: "hi",
            size: 10,
            color: "#000000"
        }
    ]
    await templates.create('bluefence.png', elements);
    await templates.create('glow.jpg', elements);
    await templates.create('purplelines.jpg', elements);
    await templates.create('yellow.jpg', elements);
    await templates.create('yellowbluecircle.jpg', elements);
    
    db.serverConfig.close();
 };
 
 main().catch(error => {
     console.log(error);
 });
