const client = require('./client');

async function init() {

    // await client.set("message:6","Hey from nodejs");
    // await client.expire("message:6",10);
    const result = await client.get("user:6");
    console.log("Result ->",result);
}

init();