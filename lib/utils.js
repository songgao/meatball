'use strict'

const https = require('https');
const settings = require('./settings');

exports.send_msg = (user_id, text) => {
	const options = {
		hostname: 'graph.facebook.com',
		port: 443,
		path: '/v2.6/me/messages?access_token=' + settings['fb-token'],
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		}
	};
  const req = https.request(options);
  req.write(JSON.stringify({
    recipient: { id: user_id },
    message: { text: text }
  }));
  req.end();
};
