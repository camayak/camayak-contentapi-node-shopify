// Express and body-parser is required by the Camayak Content API
var express = require('express');
var bodyParser = require('body-parser');

var CamayakContentAPI = require('camayak-contentapi');

// Use the controller for Shopify
var shopify = require('./controllers/shopify.js');

// This file contains secret variables
var keys = require('./keys');

// Create an express server.
app = express();
app.use(bodyParser());

// Create a new Camayak API Object
let camayak = new CamayakContentAPI({
    // Heroku specifies the port in "prod", otherwise use port 5000 locally.
    port: Number(process.env.PORT || 5000),
    api_key: keys.camayak_api_key,
    shared_secret: keys.camayak_shared_secret,
    publish: shopify.publish,
    update: shopify.publish,
    retract: shopify.retract
});

// Start listening for webhook requests
camayak.start();
