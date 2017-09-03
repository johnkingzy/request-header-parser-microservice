// server.js
// where your node app starts

// init project
const express = require('express');
const os = require('os');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  let ipaddress;
  const language = request.headers["accept-language"].split(',')[0];
  const software = request.headers['user-agent'].split(') ')[0].split(' (')[1];
    if (request.headers['x-forwarded-for']) {
        ipaddress = request.headers['x-forwarded-for'].split(",")[0];
    } else if (request.connection && request.connection.remoteAddress) {
        ipaddress = request.connection.remoteAddress;
    } else {
        ipaddress = request.ip;
    }
  response.send({
    ipaddress,
    language,
    software
    
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
