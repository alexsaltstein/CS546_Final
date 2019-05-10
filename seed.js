const dbConnection = require("./data/mongoConnection");
const data = require("./data");
const flyers = data.flyers;

async function main() {
  const db = await dbConnection();
  await db.dropDatabase();
  console.log("11111");
  try {
    const x = await flyers.create();
    console.log(x);
  }catch(e){
    console.log(e);
  }
  
  console.log("Done seeding database");
  await db.serverConfig.close();
}

main();