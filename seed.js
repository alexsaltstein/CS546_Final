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
    await templates.create('1.png','<div class="card-main-div" style="background:url(/public/images/1.png) no-repeat;"><div class="card-text-wrapper"><div class="content-div content-1-div"><span style="border: 1px dashed;" class="edit-custom-text1">Happy Eve</span></div><div class="content-div content-1-div"><span style="border: 1px dashed;" class="edit-custom-text2">Happy day</span></div><div class="content-div content-1-div"><span style="border: 1px dashed;" class="edit-custom-text3">Happy morning</span></div><div class="content-div content-1-div"><span style="border: 1px dashed;" class="edit-custom-text4">Happy day2</span></div></div></div>', elements);
    
    db.serverConfig.close();
 };
 
 main().catch(error => {
     console.log(error);
 });
