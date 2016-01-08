'use latest';
const request = require('request-promise');
module.exports = (context, cb) => {

  let text = (context.data.text || 'What are u looking for?');

  request({
    uri: `https://yoda.p.mashape.com/yoda?sentence=${text}`,
    method: 'GET',
    headers: {
      'Accept': 'text/plain',
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Mashape-Key': context.data.API_KEY
    }
  }).then((response) => {
      cb(null, response);
    })
    .catch((err) => console.error(err));

};