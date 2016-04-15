'use strict'

const fs = require('fs');
const https = require("https");
const jsonBody = require('body/json');
const app = require('express')();

const settings = require('./lib/settings');
const utils = require('./lib/utils');
const message_handler = require('./lib/message-handler');

app.post('/webhook', (request, res) => {
  jsonBody(request, res, (err, body) => {
    if (err) {
      console.log(err);
    }
    if (!body) {
      return;
    }
    console.log(JSON.stringify(body));
    body.entry.forEach( (e) => {
      if (!e.messaging) {
        return;
      }
      e.messaging.forEach( (m) => {
        if (m.sender && m.message) {
          message_handler(m.sender.id, m.message.text);
        }
      });
    });
  });
  res.sendStatus(200);
  res.end();
});

const options = {
  key: fs.readFileSync(settings['tls-key-path']),
  cert: fs.readFileSync(settings['tls-cert-path'])
};

https.createServer(options, app).listen(443);
