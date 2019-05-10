//I pledge my honor that I have abided by the Stevens honor system.
//Alex Saltstein
const users = require("./data/users");
const connection = require("./data/mongoConnection");

const main = async () => {
    
   // const sasha = await users.create("head", "poop", "alex@gmail.com", "fdsajfkdajsflasdj");
    const sasha = await users.getByEmail("alex@gmail.com");
    console.log(sasha);
    const shit = await users.addFlyer(sasha._id, "hfidsajf");
    const fdhas = await users.addFlyer(sasha._id, "hfidsajf");
    console.log(await users.getByEmailAndPass("alex@gmail.com","fdsajfkdajsflasdj"));
    const db = await connection();
    db.serverConfig.close();
};

main().catch(error => {
    console.log(error);
});