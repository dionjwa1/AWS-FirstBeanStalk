'use strict';

const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (request, response) => {
  response.status(200).send('Success!')
});

module.exports = {
  app: app,
  start: function (port) {
    app.listen(port, () => {
      console.log('Up and running on port: ', port);
    });
  },
};