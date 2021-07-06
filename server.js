'use strict';

const express = require('express');
const app = express();

//routes
app.use(express.json());
app.get('/', (request, response) => {
  response.status(200).send('Great Success!')
});

//listner
module.exports = {
  app: app,
  start: function (port) {
    app.listen(port, () => {
      console.log('We are live on ', port);
    });
  },
};