
const express = require('express');
const helmet = require('helmet');
const app = express();


app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action:'deny'}));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());


/**
 * 
 * 11/13/24 at 10:40 PM
 * Mitigate the risk of corss site scripting XSS Attacks
 * 
 */


module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {

  console.log(`🐺 JustJLineIT's server started on port: ${port}`)

});

