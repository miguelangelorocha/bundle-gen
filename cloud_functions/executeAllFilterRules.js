const request = require('request-promise-native');

async function main(params) {

    const bundleGenerationScheme = params.bundleGenerationScheme;   
    const filter_rules = bundleGenerationScheme.filter_rules;  
    let bundles = params.bundles;

    // Call all filter rules
    for (i = 0; i < filter_rules.length; i++) { 
        const filter_rule = filter_rules[i];
                
        bundles = await request(
            { 
            method: 'POST',
            url: filter_rule.url,
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