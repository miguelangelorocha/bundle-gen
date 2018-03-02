async function main(params) {

    const bundles = params.bundles;
    const bundlesSum = bundles.map(bundle => {

        const priceSum = bundle.bundles.map(v => v.price).reduce( (sum, price) => {
          return sum + (price ? price : 0);
        }, 0);
        bundle.price = priceSum;

        return bundle;                
    });    

    return bundlesSum;
}

module.exports = main;