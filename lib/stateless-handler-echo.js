'use strict'

const utils = require('./utils');
const constants = require('./constants');

class StatelessEcho {
  constructor() { }
  incoming(user_id, text) {
    utils.send_msg(user_id, text);
    return constants.DONE;
  }
}

module.exports = StatelessEcho;
