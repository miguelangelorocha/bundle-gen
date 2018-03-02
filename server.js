
const express = require('express');
const request = require('request-promise-native');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const cors = require('cors');
const bodyParser = require("body-parser");


const generateBundles = require('./cloud_functions/generateBundles');
const makeAllPossibleCombinations = require('./cloud_functions/makeAllPossibleCombinations');
const executeAllFilterRules = require('./cloud_functions/executeAllFilterRules');
const sumNodesPrices = require('./cloud_functions/sumNodesPrices');
const sumConnectionsValues = require('./cloud_functions/sumConnectionsValues');
const recordAllBroadband = require('./cloud_functions/recordAllBroadband');
const filterUniqueBbTvAndLlTypes = require('./cloud_functions/filterUniqueBbTvAndLlTypes');
const filterDuplicatedBundles = require('./cloud_functions/filterDuplicatedBundles');
const listAllBroadband = require('./cloud_functions/listAllBroadband');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO use enviroment variables - 
// const makeParamenters = req => ({ ...req.query, ...req.body, ...process.env });
const makeParamenters = req => ({ ...req.query, ...req.body});

app.post('/api/v1/generate-bundles', async (req, res) => {
  res.send(await generateBundles(makeParamenters(req)));
});

app.post('/api/v1/make-all-possible-combinations', async (req, res) => {
  res.send(await makeAllPossibleCombinations(makeParamenters(req)));
});

app.post('/api/v1/execute-all-filter-rules', async (req, res) => {
  res.send(await executeAllFilterRules(makeParamenters(req)));
});

app.post('/api/v1/sum-nodes-prices', async (req, res) => {
  res.send(await sumNodesPrices(makeParamenters(req)));
});

app.post('/api/v1/sum-connections-values', async (req, res) => {
  res.send(await sumConnectionsValues(makeParamenters(req)));
});

app.post('/api/v1/record-all-broadband', async (req, res) => {
  res.send(await recordAllBroadband(makeParamenters(req)));
});

app.post('/api/v1/filter-unique-bb-tv-and-ll-types', async (req, res) => {
  res.send(await filterUniqueBbTvAndLlTypes(makeParamenters(req)));
});

app.post('/api/v1/filter-duplicated-bundles', async (req, res) => {
  res.send(await filterDuplicatedBundles(makeParamenters(req)));
});

app.get('/api/v1/list-all-broadband', async (req, res) => {
  res.send(await listAllBroadband(makeParamenters(req)));
});

app.listen(port, async () => {
    console.log(`Listening on port ${port}`)
    app.emit( "startServer" );
    await generateBundlesAfterStart();
 });


const generateBundlesAfterStart = async () => {
  const bundleGenerationScheme = await readFile('./database/BundleGenerationScheme.json')
  request(
    {
      method: 'POST',
      uri: 'http://localhost:5000/api/v1/generate-bundles',
      json: true,
      body: JSON.parse(bundleGenerationScheme)
    }
  ).then(res => {
    const bundles = res;


  });
}

module.exports = app
