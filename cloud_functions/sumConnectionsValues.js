async function main(params) {
    
    const bundleGenerationScheme = params.bundleGenerationScheme;
    const bundles = params.bundles;

    for(let combo of bundles) {
        for(let bundle of combo.bundles) {
            const connections =bundleGenerationScheme.nodes.find(node => (node._id === bundle._id)).connections;
            if(connections) {
                for(let connection of connections) {
                    if(combo.bundles.find( connectionBundle => connectionBundle._id === connection.destination_id)) {
                        combo.price += connection.value;
                    }
                }
            }
        }

    }

    return bundles;
}

module.exports = main;