const request = require('request-promise-native');

async function main(params) {

    const bundleGenerationScheme = params.bundleGenerationScheme;
    const nodes = bundleGenerationScheme.nodes;
    const generation_rules = bundleGenerationScheme.generation_rules;
    const filter_rules = bundleGenerationScheme.filter_rules;
    
    let bundles = []; 
    // Call all generation rules
    for (let i = 0; i < generation_rules.length; i++) { 
        const generation_rule = generation_rules[i];

        bundles = await request(
            { 
                method: 'POST',
                uri: generation_rule.url,
                body: {
                    'bundleGenerationScheme': bundleGenerationScheme,
                    'bundles': bundles
                },
                json: true
            }
        );        

    }

    return bundles; 
}

module.exports = main;