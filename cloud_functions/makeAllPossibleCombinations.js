
async function main(params) {

    const bundleGenerationScheme = params.bundleGenerationScheme;
    const nodes = bundleGenerationScheme.nodes.map( node => 
        ({
          _id: node._id, 
          name: node.name, 
          type: node.type, 
          price: node.price
        }));

    const bundles = [];
    
    for (let combo of generateCombinations(nodes, 1)) {
      bundles.push({
          price: 0.0,
          bundles:combo
        });
    }    

    return bundles;
}


function* generateCombinations(arr, minSize) {
  function* doGenerateCombinations(offset, combo) {
    if (combo.length >= minSize) {
      yield combo;
    }
    for (let i = offset; i < arr.length; i++) {
      yield* doGenerateCombinations(i + 1, combo.concat(arr[i]));
    }
  }
  yield* doGenerateCombinations(0, []);
}

module.exports = main;