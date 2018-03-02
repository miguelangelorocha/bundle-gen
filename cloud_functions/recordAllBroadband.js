
const util = require('util');
const fs = require('fs');
const writeFile = util.promisify(fs.writeFile);

async function main(params) {
    
    const bundles = params.bundles;

    const filteredBundles = bundles.filter( bundle => {
        return bundle.bundles.findIndex(internalBundle => internalBundle.type === 'bb') != -1;
    });

    const sortedBundles = filteredBundles.sort( (bundle1, bundle2) => {
        // Price order (asc)
        const priceDiference = bundle1.price - bundle2.price;
        if(priceDiference !== 0) {
            return priceDiference;
        }

        // Same price, order by greater number of bundles (desc)
        return bundle2.bundles.length - bundle1.bundles.length;

    });

    try {
        const allBroadbandString = await writeFile(
        `./database/AllBroadband.json`, 
        JSON.stringify(sortedBundles, null, 2));
    } catch (err) {}
    
    return sortedBundles;
}

module.exports = main;
