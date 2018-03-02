async function main(params) {
    
    const bundles = params.bundles;
    const filteredBundles = bundles.filter(bundle => {
      
      const typeCount = {};
      const uniqueTypes = ['bb', 'tv', 'll'];
      
      for(const intervalBundle of bundle.bundles) {
        typeCount[intervalBundle.type] = typeCount[intervalBundle.type] !== undefined ?  typeCount[intervalBundle.type] + 1 : 1;
      }

      // Exclude bundle when unique type count > 1
      for(const uniqueType of uniqueTypes) {
        if(typeCount[uniqueType] > 1) {
          return false;
        }
      }


      // Count unique types
      const countUniqueType =bundle.bundles.map(v => v.type).reduce( (total, type) => {
        if (uniqueTypes.includes(type)) {
          total++;
        }
        return total;
      }, 0);

      // Must have at least 1 bundle 'bb', 'tv' or 'll'
      if(countUniqueType==0) {
        return false;
      }

      return true;

    });

    return filteredBundles;

}

module.exports = main;