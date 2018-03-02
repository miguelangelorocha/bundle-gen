# BundleGen

 Application to generate product bundles

## Technolgies

create-react-app with a Node Express Backend

## Architecture:

- 'CloudFunctions' that run rules and filters using 'pipes';
- The rules and filters are also 'CloudFunctions';
- The execution order and location are defined in the metadata of each call;
- This approach allows to distribute the execution of the rules and filters as microservices enabling high availability, scaling, versioning and easy change of business rules

## Usage

Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Install server and client dependencies

```
npm install
cd client
npm install
cd ..
```

To run tests

```
npm test
```


To start the server and client at the same time

```
npm run dev
```

## Functional Requirements

    [R1] bundles can be mounted starting from any of the nodes and following the possible connections between nodes

    [R2] The value on the connections represent additional price (positive numbers) or discounts (negative numbers) to get a bundle

    [R3] Bundles can have several addons, but cannot have more than one broadband (type: "bb"), tv (type: "tv") or landline (type:"ll")

    [R4] Each node has a "type", "price" and a name

    [R5] If price is not present, price is equal to zero.

### Non Functional Requirements

    [R6] Use node. See [TA2]

    [R7] Use React. See [TA3]

    [R8] Use ES7 or Typescript

    [R9] Sass or other css preprocessor

    [R10] Use a react + node starter kit to make it easier to put together a full-stack project

### Suggested Functional Requirements 

     [R11] 'addon' need have one least 1 (type: "bb"), tv (type: "tv") or landline (type:"ll")
    
### A summary for writing clean code

    1) You are responsible for the quality of your code
    2) Use meaningful names
    3) Write code that expresses intent
    4) Comments are often lies waiting to happen.
       Code should speek for itself whenever possible
    5) Boy Scout rule: "Always leave the campground cleaner than you found it." If you find a mess on the ground, you clean it up regardless of who might have made the mess.
    6) Single responsibility principle
    7) Write tests: Integration and unit (TDD)
    8) Work on big picture skeleton, then fill in the details later  (interface first, implementation later).
    9) Independent Architecture
    10) Practice!!!

### Tasks

    [TA1].​ Create a JSON representation of the diagram below. Make it flexible enough so that the structure can easily represent many "diagrams" in this JSON structure you've chosen. Save it as a file for this exercise, there is no need to use a database to store it

    [TA2].​ Using Node, create one REST interface "/list-all-broadband" that should mount all possible combinations for a broadband, including standalone plans and bundles. The interface returns a JSON listing all combinations, ordered by price. The algorithm for mounting the boundles should be flexible enough to work with different "diagrams".
    Example of combinations: (Broadband1), (Broadband2), (Broadband1 + AddonBB), (Broadband1 + AddonBB + TV1 + Landline)...    

    [TA3]​ Using React, create a simple page that consumes the interface you've created on 2, listing each item in a separated card. The card should have the name of the items and the total price. The UI should be understandable, with minimal css, there is no need to put a lot of effort on the aesthetics, the goal here is just to evaluate how you organize the consumption of a REST interface.    
    

### Building schema

    Node - Nodes represents Products
        Properties: 
            name (string) See [R4]
            description (String)
            image_url (String)
            type (string) See [R4]
            price: (double) See [R4]
            connections (Connection List)

    Connection - Connections represents addintional price/discount
        Properties:
            destination_id (string)
            value (double)

    FilterRule - Filter for a non-valid bundle
        Properties:
            name (String)
            description (String)
            url (string)

### Strategy

    After each change on bandle building schema

        [S1] - Make all possible combinations. See [R1]
        [S2] - Execute all filter rules
        [S3] - Sum nodes prices
        [S4] - Sum connections values [R2]
        [S5] - Record available bundles in json format

    When requesting plans

        [S6] - Get json with available bundles            
### Requested Filter Rules

    [F1] - See [R3] - Filter Unique bb/tv/ll
    [F2] - Filter duplicated bundles        

### Tests

    [TS1] Starting on node "Broadband2" (costs 60 by itself), we can add the "AddonBB" (cost 10 by itself), but has a discount of -10 if bundled with "Broadband2", also, from "Broadband2" we can add a Landline plan (costs 35 by itself), but has a discount of 40 when bundled with Broadband (this actually happens very often, as a way to incentivise consumers to acquire a landline plan with the broadband plan). Plan​ = Broadband2 + AddonBB + Landline 
    Price​ = 60 - 10 + 10 -40 +35 = 55

    [TS2] Example of combinations: (Broadband1), (Broadband2), (Broadband1 + AddonBB), (Broadband1 + AddonBB + TV1 + Landline)
    