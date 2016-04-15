'use strict'

const utils = require('./utils');
const constants = require('./constants');

class StatelessTreat {
  constructor() {
    this.responses = [
      'did i hear treat?',
      'treats! i love treats!',
      'there\'s always room for treats lol',
      'are you gonna give me some treats? i love all kinds of berries!',
      'treats are awesome, but my dad says eating too much of them can make me sick :(',
    ];
  }

  _should_say_about_treat(text) {
    return text.toLowerCase().includes('treat');
  }

  _say_about_treat_to(user_id) {
    const resp = this.responses[Math.floor(Math.random() * this.responses.length)];
    utils.send_msg(user_id, resp);
  }

  incoming(user_id, text) {
    if (this._should_say_about_treat(text)) {
      this._say_about_treat_to(user_id);
      return constants.DONE;
    } else {
      return constants.CONTINUE;
    }
  }
}

module.exports = StatelessTreat;
