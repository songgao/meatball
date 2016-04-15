'use strict'

const constants = require('./constants');
const StatelessTreat = require('./stateless-handler-treat');
const StatelessIntroduction = require('./stateless-handler-introduction');
const StatelessEcho = require('./stateless-handler-echo');

const handlers = [
  new StatelessTreat(),
  new StatelessIntroduction(),
  new StatelessEcho(),
];

module.exports = (user_id, text) => {
  for (let h of handlers) {
    const ret = h.incoming(user_id, text);
    if (constants.FAIL === ret) {
      return constants.FAIL;
    } else if (constants.DONE === ret) {
      return constants.DONE;
    }
  }
  return constants.DONE;
}
