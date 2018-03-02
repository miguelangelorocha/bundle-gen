
process.env.NODE_ENV = 'test';

const server = require('../server');

const expect = require('chai').expect;
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const request = require('request-promise-native');

const generateBundles = require('../cloud_functions/generateBundles');
const filterDuplicatedBundles = require('../cloud_functions/filterDuplicatedBundles');

describe('bundle-gen', async () => {

    before( done => {
      server.on('startServer', done());      
    });

    after( done => {
      process.exit(0); 
    })

    async function cloudFunctionTestHelper(cloudFunction, testPrefix) {
        const inputString = await readFile(`./test/${testPrefix}Input.json`);
        const expectedOutputString = await readFile(`./test/${testPrefix}Output.json`);
        const result = await cloudFunction(JSON.parse(inputString));
        expect(result).to.deep.equal(JSON.parse(expectedOutputString));
    }
    
    it('Big Test', async () => {
      await cloudFunctionTestHelper(generateBundles, 'bigTest');
    });

    it('Avoid duplicated bundle error', async () => {
      await cloudFunctionTestHelper(filterDuplicatedBundles, 'duplicatedBundles');
    }); 

    it('List all broadband', async () => {

      const result = await request(
        { 
        method: 'GET',
        url: 'http://localhost:5000/api/v1/list-all-broadband',
        json: true
        }
      );

      const allBroadbandString = await readFile(`./database/AllBroadband.json`);
      expect(result).to.deep.equal(JSON.parse(allBroadbandString));      
      
    });     
    
});