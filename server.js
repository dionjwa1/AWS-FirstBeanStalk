'use strict';

// const { response } = require('express');
const express = require('express');
const app = express();


// === === routes and such === === //
app.use(express.json());
app.get('/', (request, response) => {
  response.status(200).send('Success!')
});


// === === exports === === //
module.exports = {
  app: app,
  start: function (port) {
    app.listen(port, () => {
      console.log('Up and running on port: ', port);
    });
  },
};