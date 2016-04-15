'use strict'

const utils = require('./utils');
const constants = require('./constants');

class StatelessIntroduction {
  constructor() {
    this.matched_words = [
      'hi',
      'i am',
      'my name is',
      'hello',
      'who are you',
      'i\'m',
    ];
  }

  _should_introduce(text) {
    text = text.toLowerCase();
    for (let w of this.matched_words) {
      if (text.includes(w)) {
        return true;
      }
    }
    return false;
  }

  _introduce_to(user_id) {
    utils.send_msg(user_id, "hi! my name is meatball, also known as 贡丸 :D");
  }

  incoming(user_id, text) {
    if (this._should_introduce(text)) {
      this._introduce_to(user_id);
      return constants.DONE;
    } else {
      return constants.CONTINUE;
    }
  }
}

module.exports = StatelessIntroduction;
