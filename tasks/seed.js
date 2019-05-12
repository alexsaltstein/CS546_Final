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
            text: "Line1",
            color: "rgb(0, 0, 0)",
            font: "Brush Script MT"
        },
        {
            text: "Line2",
            color: "rgb(0, 0, 0)",
            font: "Brush Script MT"
        },
        {
            text: "Line3",
            color: "rgb(0, 0, 0)",
            font: "Brush Script MT"
        },
        {
            text: "Line4",
            color: "rgb(0, 0, 0)",
            font: "Brush Script MT"
        }
    ];
    const elements2 = [
        {
            text: "yellow",
            color: "rgb(0, 0, 0)",
            font: "Brush Script MT"
        },
        {
            text: "orange",
            color: "rgb(0, 0, 0)",
            font: "Brush Script MT"
        },
        {
            text: "hfdsa",
            color: "rgb(0, 0, 0)",
            font: "Brush Script MT"
        },
        {
            text: "hi",
            color: "rgb(0, 0, 0)",
            font: "Brush Script MT"
        }
    ];
    await templates.create('andrej-lisakov-679177-unsplash.jpg', elements);
    let f = await flyers.create('andrej-lisakov-679177-unsplash.jpg', elements2);
    await templates.create('annie-spratt-469221-unsplash.jpg', elements);
    await templates.create('bogomil-mihaylov-768373-unsplash.jpg', elements);
    await templates.create('nordwood-themes-162462-unsplash.jpg', elements);

    const hash = await bcrypt.hash("12345678", saltRounds);
    let u = await users.create("John", "Doe", "t@gmail.com", hash);
    await users.addFlyer(u._id, String(f._id));
    
    db.serverConfig.close();
 };
 
 main().catch(error => {
     console.log(error);
 });
