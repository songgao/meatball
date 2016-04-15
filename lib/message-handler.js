'use strict'

const stateless = require('./stateless-handlers');

module.exports = (user_id, text) => stateless(user_id, text);
