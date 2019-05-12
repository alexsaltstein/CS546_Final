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
    await templates.create('andrej-lisakov-679177-unsplash.jpg', elements);
    let f = await flyers.create('andrej-lisakov-679177-unsplash.jpg', elements2);
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
