'use strict'

const argv = require('yargs').options( 'cert', {
  alias: 'c', demand: true, type: 'string',
}).options( 'key', {
  alias: 'k', demand: true, type: 'string',
}).options( 'token', {
  alias: 't', demand: true, type: 'string',
}).argv;

module.exports = {
  "tls-key-path": argv.key,
  "tls-cert-path": argv.cert,
  "fb-token": argv.token,
};
