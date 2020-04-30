var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser')
var coupRoutes = require('./coupRoutes')



api = express();
api.use(cors())
api.use(bodyParser.urlencoded({ extended: true }))
api.use(bodyParser.json())
api.use(bodyParser.raw())
port = 3326;

coupRoutes(api)

api.listen(port);
console.log(`[+] Server running at port ${port}`);