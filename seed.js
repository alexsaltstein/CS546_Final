const templates = require("./data/templateFlyers");
const usersF = require("./data/userFlyers");
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
    ];
    const elements2 = [
        {
            text: "yellow",
            size: 10,
            color: "#000000"
        },
        {
            text: "orange",
            size: 10,
            color: "#000000"
        },
        {
            text: "hfdsa",
            size: 10,
            color: "#000000"
        },
        {
            text: "hi",
            size: 10,
            color: "#000000"
        }
    ];
    await templates.create('bluefence.png', elements);
    let f = await usersF.create('bluefence.png', elements2);
    await templates.create('glow.jpg', elements);
    await templates.create('purplelines.jpg', elements);
    await templates.create('yellow.jpg', elements);
    await templates.create('yellowbluecircle.jpg', elements);

    const hash = await bcrypt.hash("1234", saltRounds);
    let u = await users.create("hi", "dsa", "t@gmail.com", hash);
    await users.addFlyer(u._id, String(f._id));
    
    db.serverConfig.close();
 };
 
 main().catch(error => {
     console.log(error);
 });
