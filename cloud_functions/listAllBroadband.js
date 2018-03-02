const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function main(params) {

    const allBroadbandString = await readFile(`./database/AllBroadband.json`);
    return JSON.parse(allBroadbandString);
}

module.exports = main;