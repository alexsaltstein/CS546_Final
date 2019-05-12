const templates = require("../data/templateFlyers");
const flyers = require("../data/userFlyers");
const users = require("../data/users");
const connection = require("../data/mongoConnection");
const bcrypt = require("bcryptjs");
const saltRounds =  3;

const main = async () => {
    const db = await connection();
    await db.dropDatabase();
    const elements = [
        {
            text: "hi",
            color: "rgb(0, 0, 0)"
        },
        {
            text: "hi",
            color: "rgb(0, 0, 0)"
        },
        {
            text: "hi",
            color: "rgb(0, 0, 0)"
        },
        {
            text: "hi",
            color: "rgb(0, 0, 0)"
        }
    ];
    const elements2 = [
        {
            text: "yellow",
            color: "rgb(0, 0, 0)"
        },
        {
            text: "orange",
            color: "rgb(0, 0, 0)"
        },
        {
            text: "hfdsa",
            color: "rgb(0, 0, 0)"
        },
        {
            text: "hi",
            color: "rgb(0, 0, 0)"
        }
    ];
    await templates.create('bluefence.png', elements);
    let f = await flyers.create('bluefence.png', elements2);
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
