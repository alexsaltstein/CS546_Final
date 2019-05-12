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
            color: "#000000"
        },
        {
            text: "hi",
            color: "#000000"
        },
        {
            text: "hi",
            color: "#000000"
        },
        {
            text: "hi",
            color: "#000000"
        }
    ];
    const elements2 = [
        {
            text: "yellow",
            color: "#000000"
        },
        {
            text: "orange",
            color: "#000000"
        },
        {
            text: "hfdsa",
            color: "#000000"
        },
        {
            text: "hi",
            color: "#000000"
        }
    ];
    await templates.create('andrej-lisakov-679177-unsplash.jpg', elements);
    let f = await usersF.create('bluefence.png', elements2);
    // await templates.create('aneta-ivanova-643606-unsplash.jpg', elements);
    await templates.create('annie-spratt-469221-unsplash.jpg', elements);
    await templates.create('bogomil-mihaylov-768373-unsplash.jpg', elements);
    await templates.create('nordwood-themes-162462-unsplash.jpg', elements);

    const hash = await bcrypt.hash("1234", saltRounds);
    let u = await users.create("hi", "dsa", "t@gmail.com", hash);
    await users.addFlyer(u._id, String(f._id));
    
    db.serverConfig.close();
 };
 
 main().catch(error => {
     console.log(error);
 });
