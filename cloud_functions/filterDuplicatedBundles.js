async function main(params) {
    
    const bundles = params.bundles;

    const filteredBundles = [];
    const keyList = [];

    for(const bundle of bundles) {
        const key = bundle.bundles.map(b => b._id);
        const orderedKey = key.sort( (v1,v2) => v1 - v2);
        if(!keyList.includes(orderedKey.join())) {
            keyList.push(orderedKey.join());
            filteredBundles.push(bundle);
        }
    }

    return filteredBundles;

}

module.exports = main;