const templates = require("./data/templateFlyers");
const users = require("./data/users");
const connection = require("./data/mongoConnection");
const bcrypt = require("bcryptjs");
const saltRounds =  3;

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

    const hash = await bcrypt.hash("1234", saltRounds);
    await users.create("hi", "dsa", "t@gmail.com", hash);
    
    db.serverConfig.close();
 };
 
 main().catch(error => {
     console.log(error);
 });
